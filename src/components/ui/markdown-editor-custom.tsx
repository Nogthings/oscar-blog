import { forwardRef, useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { Button } from '@/components/ui/button'
import { Maximize, Minimize, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MarkdownEditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  height?: number
  preview?: 'live' | 'edit' | 'preview'
  disabled?: boolean
  className?: string
}

const MarkdownEditorCustom = forwardRef<HTMLDivElement, MarkdownEditorProps>(
  ({ value, onChange, placeholder, height = 400, preview = 'live', disabled, className, ...props }, ref) => {
    const [isFullscreen, setIsFullscreen] = useState(false)

    const toggleFullscreen = () => {
      setIsFullscreen(!isFullscreen)
    }

    const handleEscKey = (event: React.KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    if (isFullscreen) {
      return (
        <div 
          className="fixed inset-0 z-[9999] bg-white flex flex-col"
          onKeyDown={handleEscKey}
          tabIndex={-1}
        >
          <div className="flex items-center justify-between p-4 border-b bg-gray-50">
            <h3 className="text-lg font-semibold">Editor de Markdown</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                className="flex items-center gap-2"
              >
                <Minimize className="w-4 h-4" />
                Salir de Pantalla Completa
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={toggleFullscreen}
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cerrar
              </Button>
            </div>
          </div>
          <div className="flex-1 p-4">
            <MDEditor
              value={value || ''}
              onChange={(val) => onChange?.(val || '')}
              placeholder={placeholder}
              height={window.innerHeight - 120}
              preview={preview}
              data-color-mode="light"
              visibleDragBar={false}
              hideToolbar={false}
              textareaProps={{
                disabled,
                style: {
                  fontSize: 14,
                  backgroundColor: disabled ? '#f8f9fa' : '#ffffff',
                },
              }}
              previewOptions={{
                style: {
                  backgroundColor: '#ffffff',
                  padding: '20px',
                },
              }}
            />
          </div>
          <div className="p-4 border-t bg-gray-50 text-sm text-gray-600">
            💡 Presiona <kbd className="px-1 py-0.5 bg-gray-200 rounded">ESC</kbd> para salir del modo pantalla completa
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} className={cn('markdown-editor relative', className)} {...props}>
        <div className="relative">
          <MDEditor
            value={value || ''}
            onChange={(val) => onChange?.(val || '')}
            placeholder={placeholder}
            height={height}
            preview={preview}
            data-color-mode="light"
            visibleDragBar={false}
            hideToolbar={disabled}
            textareaProps={{
              disabled,
              style: {
                fontSize: 14,
                backgroundColor: disabled ? '#f8f9fa' : '#ffffff',
              },
            }}
            previewOptions={{
              style: {
                backgroundColor: '#ffffff',
                padding: '20px',
              },
            }}
            toolbarHeight={60}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm"
            disabled={disabled}
          >
            <Maximize className="w-4 h-4" />
            Pantalla Completa
          </Button>
        </div>
      </div>
    )
  }
)

MarkdownEditorCustom.displayName = 'MarkdownEditorCustom'

export { MarkdownEditorCustom }