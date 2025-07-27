import { PostCard } from './PostCard'

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

interface PostListProps {
  posts: Post[]
  onRead?: (post: Post) => void
  onEdit?: (post: Post) => void
  onDelete?: (post: Post) => void
  currentUserId?: string
  loading?: boolean
}

export function PostList({ 
  posts, 
  onRead, 
  onEdit, 
  onDelete, 
  currentUserId,
  loading 
}: PostListProps) {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-64"></div>
          </div>
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onRead={onRead}
          onEdit={onEdit}
          onDelete={onDelete}
          isOwner={currentUserId === post.author_id}
        />
      ))}
    </div>
  )
}