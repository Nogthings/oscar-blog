import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, Eye, Clock, Heart } from 'lucide-react'
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

interface PostCardProps {
  post: Post
  variant?: 'large' | 'medium' | 'small'
  onReadPost: (post: Post) => void
  className?: string
}

export function PostCard({ post, variant = 'small', onReadPost, className }: PostCardProps) {
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

  const gradients = [
    'from-blue-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-blue-600',
    'from-orange-500 to-red-600',
    'from-teal-500 to-cyan-600',
    'from-indigo-500 to-purple-600',
    'from-pink-500 to-rose-600',
    'from-emerald-500 to-teal-600'
  ]

  const gradient = gradients[parseInt(post.id.slice(-1), 16) % gradients.length]

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-0",
        "transform-gpu will-change-transform",
        variant === 'large' && "md:col-span-2 md:row-span-2",
        variant === 'medium' && "lg:col-span-2",
        className
      )}
      onClick={() => onReadPost(post)}
    >
      <div className="relative h-full min-h-[300px]">
        {/* Background Image or Gradient */}
        <div className="absolute inset-0">
          {post.cover_image ? (
            <>
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </>
          ) : (
            <>
              <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </>
          )}
        </div>

        {/* Floating elements animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-700" />
        </div>

        {/* Content */}
        <div className="relative h-full p-4 md:p-6 flex flex-col justify-between text-white">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Badge 
                variant="secondary" 
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                {post.profiles?.username?.toUpperCase() || 'AUTOR'}
              </Badge>
              {variant === 'large' && (
                <Badge 
                  variant="outline" 
                  className="bg-red-500/20 text-red-100 border-red-300/30 backdrop-blur-sm"
                >
                  ⭐ Destacado
                </Badge>
              )}
            </div>
            
            {/* Favorite button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation()
                // Add to favorites logic here
              }}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          {/* Main Content */}
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <h3 className={cn(
              "font-bold text-white leading-tight transition-all duration-300 group-hover:text-yellow-200",
              variant === 'large' ? "text-2xl md:text-3xl line-clamp-3" : "text-lg md:text-xl line-clamp-2"
            )}>
              {post.title}
            </h3>
            
            {(variant === 'large' || variant === 'medium') && (
              <p className="text-gray-200 text-sm md:text-base line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-xs md:text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3 md:w-4 md:h-4" />
                <span className="truncate max-w-20 md:max-w-none">
                  {post.profiles?.full_name || 'Usuario'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span>{getReadingTime(post.content)} min</span>
              </div>
            </div>

            {/* Read Button */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Button 
                size="sm" 
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  onReadPost(post)
                }}
              >
                <Eye className="w-4 h-4 mr-2" />
                Leer Artículo
              </Button>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Card>
  )
}