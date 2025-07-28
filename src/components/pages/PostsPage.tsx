import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PostCard } from '@/components/ui/PostCard'
import { PostsSkeletonGrid } from '@/components/ui/PostSkeleton'
import { LoadingProgress } from '@/components/ui/LoadingProgress'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { 
  Search, 
  Grid3X3,
  List,
  BookOpen,
  TrendingUp,
  Users,
  ChevronDown,
  X
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
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title' | 'trending'>('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

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
      case 'trending':
        // Simulate trending by combining recency and content length
        const aScore = new Date(a.created_at).getTime() + a.content.length
        const bScore = new Date(b.created_at).getTime() + b.content.length
        return bScore - aScore
      default:
        return 0
    }
  })

  const {
    displayedItems: displayedPosts,
    isLoading: infiniteLoading,
    hasMoreItems,
    progress,
    loadingRef
  } = useInfiniteScroll<Post>({
    items: sortedPosts,
    itemsPerPage: 12,
    hasMore: true
  })

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const clearSearch = () => {
    setSearchTerm('')
  }

  if (loading && posts.length === 0) {
    return (
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="text-center space-y-4">
          <div className="h-12 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse" />
        </div>
        
        {/* Controls Skeleton */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="h-10 bg-gray-200 rounded w-80 animate-pulse" />
          <div className="flex gap-2">
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
        
        {/* Posts Skeleton */}
        <PostsSkeletonGrid count={8} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Explora Todos los Posts
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubre historias increíbles, tutoriales y reflexiones de nuestra comunidad de escritores
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{publishedPosts.length}</div>
              <div className="text-sm text-gray-600">Posts Publicados</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {new Set(publishedPosts.map(p => p.author_id)).size}
              </div>
              <div className="text-sm text-gray-600">Autores Activos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {publishedPosts.reduce((acc, post) => acc + Math.ceil(post.content.split(' ').length / 200), 0)}
              </div>
              <div className="text-sm text-gray-600">Min de Lectura</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="space-y-4">
        {/* Main Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar posts, autores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 h-12 text-lg"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Más Recientes</option>
                <option value="oldest">Más Antiguos</option>
                <option value="trending">Trending</option>
                <option value="title">Por Título</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Create Post Button */}
            {isAuthenticated && (
              <Button onClick={onCreatePost} className="gap-2 whitespace-nowrap">
                <BookOpen className="w-4 h-4" />
                Nuevo Post
              </Button>
            )}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            {searchTerm ? (
              <span>
                Mostrando {displayedPosts.length} de {sortedPosts.length} posts para "{searchTerm}"
              </span>
            ) : (
              <span>
                Mostrando {displayedPosts.length} de {sortedPosts.length} posts
              </span>
            )}
          </div>
          <div className="text-gray-400">
            Carga automática activada
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {sortedPosts.length === 0 ? (
        <div className="text-center py-20">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {searchTerm ? 'No se encontraron posts' : 'No hay posts disponibles'}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `No hay posts que coincidan con "${searchTerm}"`
                  : 'Aún no hay posts publicados en el blog'
                }
              </p>
              {searchTerm && (
                <Button variant="outline" onClick={clearSearch}>
                  Limpiar búsqueda
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[300px]">
            {displayedPosts.map((post, index) => {
              // Bento layout patterns
              let variant: 'large' | 'medium' | 'small' = 'small'
              let className = ''

              // Every 12 posts, make the first one large
              if (index % 12 === 0) {
                variant = 'large'
                className = 'md:col-span-2 md:row-span-2'
              }
              // Every 6 posts (but not large), make medium
              else if (index % 6 === 1 || index % 6 === 2) {
                variant = 'medium'
                className = 'lg:col-span-2'
              }

              return (
                <PostCard
                  key={post.id}
                  post={post}
                  variant={variant}
                  onReadPost={onReadPost}
                  className={className}
                />
              )
            })}
          </div>

          {/* Loading Trigger & Progress */}
          <div ref={loadingRef}>
            <LoadingProgress
              isLoading={infiniteLoading}
              progress={progress}
              hasMoreItems={hasMoreItems}
              onScrollToTop={scrollToTop}
            />
          </div>
        </>
      )}
    </div>
  )
}