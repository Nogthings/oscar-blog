import { forwardRef } from 'react'
import MDEditor from '@uiw/react-md-editor'
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

const MarkdownEditor = forwardRef<HTMLDivElement, MarkdownEditorProps>(
  ({ value, onChange, placeholder, height = 400, preview = 'live', disabled, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('markdown-editor', className)} {...props}>
        <MDEditor
          value={value || ''}
          onChange={(val) => onChange?.(val || '')}
          placeholder={placeholder}
          height={height}
          preview={preview}
          data-color-mode="light"
          visibleDragBar={false}
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
          hideToolbar={disabled}
        />
      </div>
    )
  }
)

MarkdownEditor.displayName = 'MarkdownEditor'

export { MarkdownEditor }