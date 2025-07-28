import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PostSkeletonProps {
  variant?: 'large' | 'medium' | 'small'
  className?: string
}

export function PostSkeleton({ variant = 'small', className }: PostSkeletonProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden animate-pulse",
        variant === 'large' && "col-span-2 row-span-2",
        variant === 'medium' && "col-span-2",
        className
      )}
    >
      <div className="relative h-full">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
          {/* Badge */}
          <div className="w-16 h-5 bg-white/30 rounded-full" />
          
          {/* Title */}
          <div className="space-y-2">
            <div className="h-6 bg-white/40 rounded w-3/4" />
            {variant === 'large' && (
              <div className="h-4 bg-white/30 rounded w-1/2" />
            )}
          </div>
          
          {/* Excerpt for large cards */}
          {variant === 'large' && (
            <div className="space-y-1">
              <div className="h-3 bg-white/25 rounded w-full" />
              <div className="h-3 bg-white/25 rounded w-4/5" />
            </div>
          )}
          
          {/* Footer */}
          <div className="flex items-center gap-4">
            <div className="h-3 bg-white/25 rounded w-20" />
            <div className="h-3 bg-white/25 rounded w-16" />
            <div className="h-3 bg-white/25 rounded w-12" />
          </div>
        </div>
      </div>
    </Card>
  )
}

interface PostsSkeletonGridProps {
  count?: number
}

export function PostsSkeletonGrid({ count = 6 }: PostsSkeletonGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[300px]">
      {Array.from({ length: count }).map((_, index) => {
        const variant = index === 0 ? 'large' : index < 3 ? 'medium' : 'small'
        return (
          <PostSkeleton 
            key={index} 
            variant={variant}
            className={cn(
              index === 0 && "md:col-span-2 md:row-span-2",
              index === 1 && "lg:col-span-2",
              index === 2 && "lg:col-span-2"
            )}
          />
        )
      })}
    </div>
  )
}