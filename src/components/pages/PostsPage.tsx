import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Eye,
  BookOpen
} from 'lucide-react'

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

interface PostsPageProps {
  posts: Post[]
  onReadPost: (post: Post) => void
  onCreatePost: () => void
  loading: boolean
  isAuthenticated: boolean
}

export function PostsPage({ posts, onReadPost, onCreatePost, loading, isAuthenticated }: PostsPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest')

  const publishedPosts = posts.filter(post => post.published)
  
  const filteredPosts = publishedPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.profiles?.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      case 'oldest':
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
        <div className="grid gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Todos los Posts
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explora nuestra colección completa de artículos sobre tecnología, desarrollo y más
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <BookOpen className="w-4 h-4" />
            <span>{publishedPosts.length} artículos publicados</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'title')}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Más recientes</option>
            <option value="oldest">Más antiguos</option>
            <option value="title">Por título</option>
          </select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {searchTerm && (
            <>Mostrando {sortedPosts.length} de {publishedPosts.length} posts para "{searchTerm}"</>
          )}
          {!searchTerm && (
            <>Mostrando {sortedPosts.length} posts</>
          )}
        </p>
        
        {isAuthenticated && (
          <Button onClick={onCreatePost} className="gap-2">
            <BookOpen className="w-4 h-4" />
            Nuevo Post
          </Button>
        )}
      </div>

      {/* Posts Grid */}
      {sortedPosts.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {searchTerm ? 'No se encontraron posts' : 'No hay posts disponibles'}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm 
                  ? `No hay posts que coincidan con "${searchTerm}"`
                  : 'Aún no hay posts publicados en el blog'
                }
              </p>
              {searchTerm && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm('')}
                >
                  Limpiar búsqueda
                </Button>
              )}
            </div>
          </div>
        </Card>
      ) : (
        <div className="grid gap-6">
          {sortedPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200 group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Cover Image */}
                  {post.cover_image && (
                    <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className={`p-6 flex-1 ${post.cover_image ? '' : 'md:w-full'}`}>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.profiles?.full_name || 'Usuario'}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.created_at)}</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => onReadPost(post)}
                          className="gap-2 group-hover:bg-blue-50 group-hover:text-blue-600"
                        >
                          <Eye className="w-4 h-4" />
                          Leer más
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Load More / Pagination would go here if needed */}
      {sortedPosts.length > 0 && (
        <div className="text-center pt-8">
          <p className="text-sm text-gray-500">
            {sortedPosts.length === 1 ? '1 post mostrado' : `${sortedPosts.length} posts mostrados`}
          </p>
        </div>
      )}
    </div>
  )
}