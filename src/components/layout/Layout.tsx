import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  onCreatePost?: () => void
  onLogin?: () => void
  onNavigateHome?: () => void
  onNavigatePosts?: () => void
  onNavigateAbout?: () => void
}

export function Layout({ children, onCreatePost, onLogin, onNavigateHome, onNavigatePosts, onNavigateAbout }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onCreatePost={onCreatePost} 
        onLogin={onLogin}
        onNavigateHome={onNavigateHome}
        onNavigatePosts={onNavigatePosts}
        onNavigateAbout={onNavigateAbout}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}