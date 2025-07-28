import { useState } from 'react'
import { BentoGrid } from './BentoGrid'
import { Button } from '@/components/ui/button'
import { PenTool, TrendingUp, Users, BookOpen } from 'lucide-react'

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

interface HomePageProps {
  posts: Post[]
  onReadPost: (post: Post) => void
  onCreatePost: () => void
  onNavigatePosts?: () => void
  loading?: boolean
  isAuthenticated?: boolean
}

export function HomePage({ posts, onReadPost, onCreatePost, onNavigatePosts, loading, isAuthenticated = false }: HomePageProps) {
  const [showAllPosts, setShowAllPosts] = useState(false)
  
  const displayedPosts = showAllPosts ? posts : posts.slice(0, 8)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Oscar Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubre artículos increíbles, comparte tus ideas y conecta con una comunidad de escritores apasionados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={onCreatePost} size="lg" className="flex items-center gap-2">
              <PenTool className="w-5 h-5" />
              {isAuthenticated ? 'Escribir Artículo' : 'Iniciar Sesión para Escribir'}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onNavigatePosts}
              className="flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Explorar Posts
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
            <div className="text-sm text-gray-600">Artículos Publicados</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {new Set(posts.map(p => p.author_id)).size}
            </div>
            <div className="text-sm text-gray-600">Escritores Activos</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {posts.reduce((acc, post) => acc + Math.ceil(post.content.split(' ').length / 200), 0)}
            </div>
            <div className="text-sm text-gray-600">Minutos de Lectura</div>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Artículos Destacados</h2>
            <p className="text-gray-600 mt-2">
              Los últimos artículos de nuestra comunidad
            </p>
          </div>
          {posts.length > 8 && (
            <Button
              variant="outline"
              onClick={() => setShowAllPosts(!showAllPosts)}
            >
              {showAllPosts ? 'Ver Menos' : `Ver Todos (${posts.length})`}
            </Button>
          )}
        </div>

        <BentoGrid 
          posts={displayedPosts} 
          onReadPost={onReadPost} 
          onCreatePost={onCreatePost}
          loading={loading}
        />
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">
          {isAuthenticated ? '¿Listo para compartir tu historia?' : '¿Quieres unirte a la comunidad?'}
        </h3>
        <p className="text-xl mb-6 opacity-90">
          {isAuthenticated 
            ? 'Únete a nuestra comunidad de escritores y deja que el mundo conozca tus ideas.'
            : 'Regístrate para escribir artículos, conectar con otros escritores y compartir tus ideas.'
          }
        </p>
        <Button 
          onClick={onCreatePost}
          size="lg" 
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          <PenTool className="w-5 h-5 mr-2" />
          {isAuthenticated ? 'Comenzar a Escribir' : 'Registrarse Ahora'}
        </Button>
      </div>
    </div>
  )
}