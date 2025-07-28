import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { SignUpForm } from './SignUpForm'

interface AuthModalProps {
  onSuccess?: () => void
}

export function AuthModal({ onSuccess }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm 
            onToggleMode={() => setIsLogin(false)} 
            onSuccess={onSuccess}
          />
        ) : (
          <SignUpForm 
            onToggleMode={() => setIsLogin(true)}
            onSuccess={onSuccess}
          />
        )}
      </div>
    </div>
  )
}