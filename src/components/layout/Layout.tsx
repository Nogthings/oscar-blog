import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  onCreatePost?: () => void
}

export function Layout({ children, onCreatePost }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onCreatePost={onCreatePost} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}