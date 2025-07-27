import { useState } from 'react'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { AuthModal } from '@/components/auth/AuthModal'
import { Layout } from '@/components/layout/Layout'
import { PostList } from '@/components/blog/PostList'
import { PostForm } from '@/components/blog/PostForm'
import { PostDetail } from '@/components/blog/PostDetail'
import { usePosts } from '@/hooks/usePosts'

type Post = {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  author_id: string
  published: boolean
  created_at: string
  updated_at: string
  profiles?: {
    full_name: string
    username: string
  }
}

type View = 'home' | 'create' | 'edit' | 'detail'

function BlogApp() {
  const { user, loading: authLoading } = useAuth()
  const { 
    posts, 
    loading: postsLoading, 
    createPost, 
    updatePost, 
    deletePost,
    error 
  } = usePosts()

  const [currentView, setCurrentView] = useState<View>('home')
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const handleCreatePost = () => {
    setSelectedPost(null)
    setCurrentView('create')
  }

  const handleEditPost = (post: Post) => {
    setSelectedPost(post)
    setCurrentView('edit')
  }

  const handleViewPost = (post: Post) => {
    setSelectedPost(post)
    setCurrentView('detail')
  }

  const handleDeletePost = async (post: Post) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este post?')) {
      try {
        await deletePost(post.id)
        if (currentView === 'detail' && selectedPost?.id === post.id) {
          setCurrentView('home')
        }
      } catch (error) {
        alert('Error al eliminar el post')
      }
    }
  }

  const handlePostSubmit = async (
    data: { title: string; excerpt: string; content: string; slug: string },
    published: boolean
  ) => {
    try {
      if (selectedPost) {
        await updatePost(selectedPost.id, { ...data, published })
      } else {
        await createPost({ ...data, published })
      }
      setCurrentView('home')
    } catch (error) {
      throw error
    }
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedPost(null)
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <AuthModal />
  }

  return (
    <Layout onCreatePost={handleCreatePost}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 text-red-600 bg-red-50 border border-red-200 rounded-md">
            Error: {error}
          </div>
        )}

        {currentView === 'home' && (
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Bienvenido al Blog
              </h1>
              <p className="text-lg text-gray-600">
                Descubre artículos increíbles de nuestra comunidad
              </p>
            </div>
            
            <PostList
              posts={posts}
              onRead={handleViewPost}
              onEdit={handleEditPost}
              onDelete={handleDeletePost}
              currentUserId={user?.id}
              loading={postsLoading}
            />
          </div>
        )}

        {(currentView === 'create' || currentView === 'edit') && (
          <PostForm
            post={selectedPost || undefined}
            onSubmit={handlePostSubmit}
            onCancel={handleBackToHome}
          />
        )}

        {currentView === 'detail' && selectedPost && (
          <PostDetail
            post={selectedPost}
            onBack={handleBackToHome}
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
            isOwner={user?.id === selectedPost.author_id}
          />
        )}
      </div>
    </Layout>
  )
}

function App() {
  return (
    <AuthProvider>
      <BlogApp />
    </AuthProvider>
  )
}

export default App
