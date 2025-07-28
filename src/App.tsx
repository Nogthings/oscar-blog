import { useState } from 'react'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { AuthModal } from '@/components/auth/AuthModal'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/components/home/HomePage'
import { PostForm } from '@/components/blog/PostForm'
import { PostDetail } from '@/components/blog/PostDetail'
import { PostsPage } from '@/components/pages/PostsPage'
import { AboutPage } from '@/components/pages/AboutPage'
import { TermsPage } from '@/components/pages/TermsPage'
import { PrivacyPage } from '@/components/pages/PrivacyPage'
import { CookieConsent, useCookieConsent } from '@/components/ui/CookieConsent'
import { usePosts } from '@/hooks/usePosts'

type Post = {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  author_id: string
  published: boolean
  cover_image?: string
  created_at: string
  updated_at: string
  profiles?: {
    full_name: string
    username: string
  }
}

type View = 'home' | 'posts' | 'about' | 'create' | 'edit' | 'detail' | 'login' | 'terms' | 'privacy'

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
  const { hasConsent } = useCookieConsent()

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
    data: { title: string; excerpt: string; content: string; slug: string; cover_image?: string },
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

  const handleNavigateHome = () => {
    setCurrentView('home')
    setSelectedPost(null)
  }

  const handleNavigatePosts = () => {
    setCurrentView('posts')
    setSelectedPost(null)
  }

  const handleNavigateAbout = () => {
    setCurrentView('about')
    setSelectedPost(null)
  }

  const handleNavigatePrivacy = () => {
    setCurrentView('privacy')
    setSelectedPost(null)
  }

  const handleNavigateTerms = () => {
    setCurrentView('terms')
    setSelectedPost(null)
  }

  const handleCookieAcceptAll = () => {
    console.log('All cookies accepted')
    // Enable all tracking/analytics here
  }

  const handleCookieAcceptSelected = (preferences: any) => {
    console.log('Cookie preferences saved:', preferences)
    // Apply selected cookie preferences
  }

  const handleCookieReject = () => {
    console.log('Only essential cookies accepted')
    // Disable all non-essential tracking
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

  // Show auth modal only for protected views when not authenticated
  if (!user && (currentView === 'create' || currentView === 'edit')) {
    return <AuthModal />
  }

  return (
    <Layout 
      onCreatePost={user ? handleCreatePost : undefined}
      onLogin={() => setCurrentView('login')}
      onNavigateHome={handleNavigateHome}
      onNavigatePosts={handleNavigatePosts}
      onNavigateAbout={handleNavigateAbout}
      onNavigatePrivacy={handleNavigatePrivacy}
      onNavigateTerms={handleNavigateTerms}
      currentView={currentView}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 text-red-600 bg-red-50 border border-red-200 rounded-md">
            Error: {error}
          </div>
        )}

        {currentView === 'home' && (
          <HomePage
            posts={posts}
            onReadPost={handleViewPost}
            onCreatePost={user ? handleCreatePost : () => setCurrentView('login')}
            onNavigatePosts={handleNavigatePosts}
            loading={postsLoading}
            isAuthenticated={!!user}
          />
        )}

        {currentView === 'login' && !user && (
          <AuthModal onSuccess={() => setCurrentView('home')} />
        )}

        {(currentView === 'create' || currentView === 'edit') && user && (
          <PostForm
            post={selectedPost || undefined}
            onSubmit={handlePostSubmit}
            onCancel={handleBackToHome}
          />
        )}

        {currentView === 'posts' && (
          <PostsPage
            posts={posts}
            onReadPost={handleViewPost}
            onCreatePost={user ? handleCreatePost : () => setCurrentView('login')}
            loading={postsLoading}
            isAuthenticated={!!user}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onCreatePost={user ? handleCreatePost : () => setCurrentView('login')}
            isAuthenticated={!!user}
          />
        )}

        {currentView === 'terms' && (
          <TermsPage
            onNavigateHome={handleNavigateHome}
          />
        )}

        {currentView === 'privacy' && (
          <PrivacyPage
            onNavigateHome={handleNavigateHome}
          />
        )}

        {currentView === 'detail' && selectedPost && (
          <PostDetail
            post={selectedPost}
            onBack={handleBackToHome}
            onEdit={user ? handleEditPost : undefined}
            onDelete={user ? handleDeletePost : undefined}
            isOwner={user?.id === selectedPost.author_id}
          />
        )}
      </div>
      
      {/* Cookie Consent Banner */}
      {!hasConsent && (
        <CookieConsent
          onAcceptAll={handleCookieAcceptAll}
          onAcceptSelected={handleCookieAcceptSelected}
          onReject={handleCookieReject}
        />
      )}
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
