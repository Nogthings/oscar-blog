import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const postSchema = z.object({
  title: z.string().min(1, 'El título es requerido').max(200, 'El título es muy largo'),
  excerpt: z.string().min(1, 'El resumen es requerido').max(300, 'El resumen es muy largo'),
  content: z.string().min(1, 'El contenido es requerido'),
  slug: z.string().min(1, 'El slug es requerido').regex(/^[a-z0-9-]+$/, 'El slug solo puede contener letras minúsculas, números y guiones'),
})

type PostForm = z.infer<typeof postSchema>
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
}

interface PostFormProps {
  post?: Post
  onSubmit: (data: PostForm, published: boolean) => Promise<void>
  onCancel: () => void
  isLoading?: boolean
}

export function PostForm({ post, onSubmit, onCancel, isLoading }: PostFormProps) {
  const [isSaving, setIsSaving] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PostForm>({
    resolver: zodResolver(postSchema),
    defaultValues: post ? {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      slug: post.slug,
    } : undefined,
  })

  const title = watch('title')

  // Auto-generate slug from title
  useEffect(() => {
    if (title && !post) {
      const slug = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim()
      setValue('slug', slug)
    }
  }, [title, setValue, post])

  const handleFormSubmit = async (data: PostForm, published: boolean) => {
    setIsSaving(true)
    try {
      await onSubmit(data, published)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          {post ? 'Editar Post' : 'Crear Nuevo Post'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input
                id="title"
                placeholder="Título del post"
                {...register('title')}
                disabled={isSaving || isLoading}
              />
              {errors.title && (
                <p className="text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                placeholder="url-del-post"
                {...register('slug')}
                disabled={isSaving || isLoading}
              />
              {errors.slug && (
                <p className="text-sm text-red-600">{errors.slug.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Resumen *</Label>
            <Textarea
              id="excerpt"
              placeholder="Breve descripción del post..."
              rows={3}
              {...register('excerpt')}
              disabled={isSaving || isLoading}
            />
            {errors.excerpt && (
              <p className="text-sm text-red-600">{errors.excerpt.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenido *</Label>
            <Textarea
              id="content"
              placeholder="Escribe el contenido de tu post aquí..."
              rows={12}
              {...register('content')}
              disabled={isSaving || isLoading}
            />
            {errors.content && (
              <p className="text-sm text-red-600">{errors.content.message}</p>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={handleSubmit((data) => handleFormSubmit(data, false))}
              variant="outline"
              disabled={isSaving || isLoading}
              className="flex-1"
            >
              {isSaving ? 'Guardando...' : 'Guardar como Borrador'}
            </Button>
            
            <Button
              type="button"
              onClick={handleSubmit((data) => handleFormSubmit(data, true))}
              disabled={isSaving || isLoading}
              className="flex-1"
            >
              {isSaving ? 'Publicando...' : 'Publicar'}
            </Button>
            
            <Button
              type="button"
              onClick={onCancel}
              variant="ghost"
              disabled={isSaving || isLoading}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}