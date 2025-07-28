import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  onCreatePost?: () => void
  onLogin?: () => void
  onNavigateHome?: () => void
  onNavigatePosts?: () => void
  onNavigateAbout?: () => void
  onNavigatePrivacy?: () => void
  onNavigateTerms?: () => void
}

export function Layout({ children, onCreatePost, onLogin, onNavigateHome, onNavigatePosts, onNavigateAbout, onNavigatePrivacy, onNavigateTerms }: LayoutProps) {
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
      <Footer 
        onNavigatePrivacy={onNavigatePrivacy}
        onNavigateTerms={onNavigateTerms}
      />
    </div>
  )
}