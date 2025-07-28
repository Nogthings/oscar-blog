import { supabase } from '@/lib/supabase'

export async function ensureUserProfile(userId: string, email: string, fullName?: string) {
  try {
    // Check if profile exists
    const { data: existingProfile, error: fetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (fetchError && fetchError.code !== 'PGRST116') {
      // Error other than "not found"
      throw fetchError
    }

    if (existingProfile) {
      console.log('Profile already exists:', existingProfile)
      return existingProfile
    }

    // Create profile if it doesn't exist
    const username = email.split('@')[0]
    const profileData = {
      id: userId,
      username: username,
      full_name: fullName || email || 'Usuario',
    }

    console.log('Creating profile:', profileData)

    const { data: newProfile, error: insertError } = await supabase
      .from('profiles')
      .insert([profileData])
      .select()
      .single()

    if (insertError) {
      throw insertError
    }

    console.log('Profile created successfully:', newProfile)
    return newProfile

  } catch (error) {
    console.error('Error ensuring user profile:', error)
    throw error
  }
}

export async function updateExistingProfile(userId: string, updates: { full_name?: string; username?: string }) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    if (error) throw error

    console.log('Profile updated:', data)
    return data
  } catch (error) {
    console.error('Error updating profile:', error)
    throw error
  }
}