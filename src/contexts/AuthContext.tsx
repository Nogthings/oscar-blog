import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { ensureUserProfile } from '@/utils/profileUtils'

// Using any for now to avoid import issues
type User = any
type Session = any

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [pendingUserData, setPendingUserData] = useState<{email: string, fullName: string} | null>(null)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)

      // Create profile if user just signed in and doesn't have one
      if (event === 'SIGNED_IN' && session?.user) {
        try {
          const fullName = pendingUserData?.fullName || session.user.user_metadata?.full_name || null
          await ensureUserProfile(session.user.id, session.user.email || '', fullName)
          setPendingUserData(null) // Clear pending data after successful profile creation
        } catch (error) {
          console.error('Error ensuring user profile:', error)
        }
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    // Store user data for later profile creation
    setPendingUserData({ email, fullName })
    
    // Simple signup without metadata to avoid 500 error
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error
    
    // Profile will be created when user signs in
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}