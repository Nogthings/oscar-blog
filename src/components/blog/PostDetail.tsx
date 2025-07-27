import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Calendar, User, ArrowLeft, Edit, Trash2 } from 'lucide-react'

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

interface PostDetailProps {
  post: Post
  onBack: () => void
  onEdit?: (post: Post) => void
  onDelete?: (post: Post) => void
  isOwner?: boolean
}

export function PostDetail({ post, onBack, onEdit, onDelete, isOwner }: PostDetailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button 
          onClick={onBack} 
          variant="ghost" 
          size="sm"
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
      </div>

      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {post.excerpt}
              </p>
            </div>
            
            {!post.published && (
              <Badge variant="secondary" className="ml-4">
                Borrador
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium">
                  {post.profiles?.full_name || 'Usuario'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
            </div>

            {isOwner && (
              <div className="flex gap-2">
                {onEdit && (
                  <Button
                    onClick={() => onEdit(post)}
                    variant="outline"
                    size="sm"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                )}
                {onDelete && (
                  <Button
                    onClick={() => onDelete(post)}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Eliminar
                  </Button>
                )}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-base leading-relaxed">
              {post.content}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}