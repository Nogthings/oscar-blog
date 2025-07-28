import MarkdownPreview from '@uiw/react-markdown-preview'
import { cn } from '@/lib/utils'

interface MarkdownPreviewProps {
  source: string
  className?: string
}

export function MarkdownDisplay({ source, className }: MarkdownPreviewProps) {
  return (
    <div className={cn('markdown-preview', className)}>
      <MarkdownPreview
        source={source}
        style={{
          backgroundColor: 'transparent',
          color: 'inherit',
        }}
        wrapperElement={{
          'data-color-mode': 'light'
        }}
        components={{
          h1: ({ children, ...props }) => (
            <h1 className="text-3xl font-bold mb-4 text-gray-900" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-2xl font-bold mb-3 text-gray-900" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-xl font-bold mb-2 text-gray-900" {...props}>
              {children}
            </h3>
          ),
          p: ({ children, ...props }) => (
            <p className="mb-4 leading-relaxed text-gray-700" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="list-disc list-inside mb-4 text-gray-700" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal list-inside mb-4 text-gray-700" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="mb-1" {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-600 bg-gray-50" {...props}>
              {children}
            </blockquote>
          ),
          code: ({ children, ...props }) => (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-red-600" {...props}>
              {children}
            </code>
          ),
          pre: ({ children, ...props }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto" {...props}>
              {children}
            </pre>
          ),
          a: ({ children, ...props }) => (
            <a className="text-blue-600 hover:text-blue-800 underline" {...props}>
              {children}
            </a>
          ),
          img: ({ ...props }) => (
            <img className="max-w-full h-auto rounded-lg mb-4" {...props} />
          ),
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-300" {...props}>
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border border-gray-300 px-4 py-2" {...props}>
              {children}
            </td>
          ),
        }}
      />
    </div>
  )
}