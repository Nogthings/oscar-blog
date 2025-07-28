import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MarkdownEditorCustom } from '@/components/ui/markdown-editor-custom'

const postSchema = z.object({
  title: z.string().min(1, 'El título es requerido').max(200, 'El título es muy largo'),
  excerpt: z.string().min(1, 'El resumen es requerido').max(300, 'El resumen es muy largo'),
  content: z.string().min(1, 'El contenido es requerido'),
  slug: z.string().min(1, 'El slug es requerido').regex(/^[a-z0-9-]+$/, 'El slug solo puede contener letras minúsculas, números y guiones'),
  cover_image: z.string().optional().refine((val) => !val || z.string().url().safeParse(val).success, {
    message: 'Debe ser una URL válida o estar vacío'
  }),
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
  cover_image?: string
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
  // Determine if form is processing
  const isProcessing = isLoading
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<PostForm>({
    resolver: zodResolver(postSchema),
    defaultValues: post ? {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      slug: post.slug,
      cover_image: post.cover_image || '',
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
    try {
      await onSubmit(data, published)
    } catch (error) {
      console.error('Form submission error:', error)
      // Show error to user
      alert('Error al publicar el post. Por favor, inténtalo de nuevo.')
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
                disabled={isProcessing}
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
                disabled={isProcessing}
              />
              {errors.slug && (
                <p className="text-sm text-red-600">{errors.slug.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover_image">Imagen de Portada (URL)</Label>
            <Input
              id="cover_image"
              type="url"
              placeholder="https://ejemplo.com/imagen.jpg"
              {...register('cover_image')}
              disabled={isProcessing}
            />
            {errors.cover_image && (
              <p className="text-sm text-red-600">{errors.cover_image.message}</p>
            )}
            <p className="text-sm text-gray-500">
              💡 Puedes usar servicios como Unsplash, Pexels, o subir a Imgur para obtener URLs de imágenes
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Resumen *</Label>
            <Textarea
              id="excerpt"
              placeholder="Breve descripción del post..."
              rows={3}
              {...register('excerpt')}
              disabled={isProcessing}
            />
            {errors.excerpt && (
              <p className="text-sm text-red-600">{errors.excerpt.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenido * (Markdown)</Label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <MarkdownEditorCustom
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Escribe el contenido de tu post aquí usando Markdown..."
                  height={500}
                  disabled={isProcessing}
                />
              )}
            />
            {errors.content && (
              <p className="text-sm text-red-600">{errors.content.message}</p>
            )}
            <div className="text-sm text-gray-500 mt-2">
              <p>💡 <strong>Tip:</strong> Puedes usar Markdown para dar formato a tu contenido:</p>
              <ul className="list-disc list-inside mt-1 space-y-0.5">
                <li><code>**texto**</code> para <strong>negrita</strong></li>
                <li><code>*texto*</code> para <em>cursiva</em></li>
                <li><code># Título</code> para encabezados</li>
                <li><code>- item</code> para listas</li>
                <li><code>[enlace](url)</code> para enlaces</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={handleSubmit((data) => handleFormSubmit(data, false))}
              variant="outline"
              disabled={isProcessing}
              className="flex-1"
            >
              {isProcessing ? 'Guardando...' : 'Guardar como Borrador'}
            </Button>
            
            <Button
              type="button"
              onClick={handleSubmit((data) => handleFormSubmit(data, true))}
              disabled={isProcessing}
              className="flex-1"
            >
              {isProcessing ? 'Publicando...' : 'Publicar'}
            </Button>
            
            <Button
              type="button"
              onClick={onCancel}
              variant="ghost"
              disabled={isProcessing}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}