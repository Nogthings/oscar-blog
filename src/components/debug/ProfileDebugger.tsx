import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

export function ProfileDebugger() {
  const [profiles, setProfiles] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const fetchProfilesAndPosts = async () => {
    setLoading(true)
    try {
      // Fetch all profiles
      const { data: profilesData } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      // Fetch all posts with profiles
      const { data: postsData } = await supabase
        .from('posts')
        .select(`
          *,
          profiles (
            full_name,
            username
          )
        `)
        .order('created_at', { ascending: false })

      setProfiles(profilesData || [])
      setPosts(postsData || [])

      console.log('All profiles:', profilesData)
      console.log('All posts with profiles:', postsData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateCurrentUserProfile = async () => {
    if (!user) return

    const fullName = prompt('Ingresa tu nombre completo:')
    if (!fullName) return

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullName })
        .eq('id', user.id)

      if (error) throw error

      alert('Perfil actualizado correctamente')
      fetchProfilesAndPosts()
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Error al actualizar perfil')
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Debug de Perfiles y Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={fetchProfilesAndPosts} disabled={loading}>
              {loading ? 'Cargando...' : 'Cargar Datos'}
            </Button>
            <Button onClick={updateCurrentUserProfile} variant="outline">
              Actualizar Mi Perfil
            </Button>
          </div>

          {profiles.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Perfiles ({profiles.length}):</h3>
              <div className="text-sm space-y-1">
                {profiles.map((profile) => (
                  <div key={profile.id} className="bg-gray-100 p-2 rounded">
                    <strong>ID:</strong> {profile.id.slice(0, 8)}... <br />
                    <strong>Username:</strong> {profile.username} <br />
                    <strong>Full Name:</strong> {profile.full_name || 'SIN NOMBRE'} <br />
                    <strong>Created:</strong> {new Date(profile.created_at).toLocaleString()}
                  </div>
                ))}
              </div>
            </div>
          )}

          {posts.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Posts ({posts.length}):</h3>
              <div className="text-sm space-y-1">
                {posts.map((post) => (
                  <div key={post.id} className="bg-blue-100 p-2 rounded">
                    <strong>Título:</strong> {post.title} <br />
                    <strong>Autor ID:</strong> {post.author_id.slice(0, 8)}... <br />
                    <strong>Autor Nombre:</strong> {post.profiles?.full_name || 'SIN PROFILE'} <br />
                    <strong>Profile Object:</strong> {JSON.stringify(post.profiles)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}