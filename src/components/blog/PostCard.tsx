import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, Eye } from 'lucide-react'

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

interface PostCardProps {
  post: Post
  onRead?: (post: Post) => void
  onEdit?: (post: Post) => void
  onDelete?: (post: Post) => void
  isOwner?: boolean
}

export function PostCard({ post, onRead, onEdit, onDelete, isOwner }: PostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold line-clamp-2 mb-2">{post.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          </div>
          {!post.published && (
            <Badge variant="secondary" className="ml-2">
              Borrador
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.profiles?.full_name || 'Usuario'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.created_at)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-end">
        <div className="flex gap-2 mt-4">
          {onRead && (
            <Button 
              onClick={() => onRead(post)} 
              variant="default" 
              size="sm"
              className="flex-1"
            >
              <Eye className="w-4 h-4 mr-2" />
              Leer
            </Button>
          )}
          
          {isOwner && onEdit && (
            <Button 
              onClick={() => onEdit(post)} 
              variant="outline" 
              size="sm"
            >
              Editar
            </Button>
          )}
          
          {isOwner && onDelete && (
            <Button 
              onClick={() => onDelete(post)} 
              variant="destructive" 
              size="sm"
            >
              Eliminar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}