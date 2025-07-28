import { Progress } from '@/components/ui/progress'
import { Loader2, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LoadingProgressProps {
  isLoading: boolean
  progress: number
  hasMoreItems: boolean
  onScrollToTop?: () => void
}

export function LoadingProgress({ isLoading, progress, hasMoreItems, onScrollToTop }: LoadingProgressProps) {
  if (!isLoading && !hasMoreItems && progress >= 100) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-gray-500 text-lg font-medium">
          🎉 ¡Has visto todos los posts!
        </div>
        <p className="text-gray-400 mb-6">
          No hay más contenido para mostrar
        </p>
        <Button 
          variant="outline" 
          onClick={onScrollToTop}
          className="gap-2"
        >
          <ChevronUp className="w-4 h-4" />
          Volver al inicio
        </Button>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="text-center py-12 space-y-6">
        <div className="flex items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <span className="text-lg font-medium text-gray-700">
            Cargando más posts...
          </span>
        </div>
        
        <div className="max-w-md mx-auto space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-500">
            {Math.round(progress)}% cargado
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
        </div>
      </div>
    )
  }

  return null
}