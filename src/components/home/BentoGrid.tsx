import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, Eye, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

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

interface BentoGridProps {
  posts: Post[]
  onReadPost: (post: Post) => void
  loading?: boolean
}

export function BentoGrid({ posts, onReadPost, loading }: BentoGridProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.split(' ').length
    return Math.ceil(words / wordsPerMinute)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "bg-gray-200 rounded-xl animate-pulse",
              i === 0 && "md:col-span-2 md:row-span-2",
              i === 1 && "md:col-span-2 lg:col-span-2",
              i === 2 && "lg:col-span-2",
              i >= 3 && "md:col-span-2 lg:col-span-2"
            )}
          />
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">
          No hay posts disponibles
        </div>
        <p className="text-gray-400">
          ¡Sé el primero en escribir algo!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
      {posts.map((post, index) => {
        const isLarge = index === 0
        const isMedium = index === 1 || index === 2
        
        return (
          <div
            key={post.id}
            className={cn(
              "group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl",
              isLarge && "md:col-span-2 md:row-span-2",
              isMedium && "md:col-span-2 lg:col-span-2",
              index >= 3 && "md:col-span-2 lg:col-span-2"
            )}
            onClick={() => onReadPost(post)}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              {post.cover_image ? (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full p-4 flex flex-col justify-between text-white">
              {/* Header */}
              <div className="flex items-start justify-between">
                <Badge 
                  variant="secondary" 
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
                >
                  {post.profiles?.username?.toUpperCase() || 'AUTOR'}
                </Badge>
                {!post.published && (
                  <Badge variant="destructive" className="bg-red-500/80">
                    Borrador
                  </Badge>
                )}
              </div>

              {/* Main Content */}
              <div className="space-y-2">
                <h3 className={cn(
                  "font-bold text-white leading-tight line-clamp-3",
                  isLarge ? "text-2xl" : "text-lg"
                )}>
                  {post.title}
                </h3>
                
                {isLarge && (
                  <p className="text-gray-200 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.profiles?.full_name || 'Usuario'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{getReadingTime(post.content)} min</span>
                  </div>
                </div>
              </div>

              {/* Read Button */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  size="sm" 
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Leer Artículo
                </Button>
              </div>
            </div>
          </div>
        )
      })}

      {/* Call to Action Card */}
      {posts.length > 0 && (
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl p-6 flex flex-col justify-center items-center text-white text-center">
          <h3 className="text-xl font-bold mb-2">¿Tienes algo que compartir?</h3>
          <p className="text-sm mb-4 opacity-90">
            Únete a nuestra comunidad y comparte tus ideas
          </p>
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Escribir Post
          </Button>
        </div>
      )}
    </div>
  )
}