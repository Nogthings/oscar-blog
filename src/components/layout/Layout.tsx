import { Header } from './Header'
import { Footer } from './Footer'

type View = 'home' | 'posts' | 'about' | 'create' | 'edit' | 'detail' | 'login' | 'terms' | 'privacy'

interface LayoutProps {
  children: React.ReactNode
  onCreatePost?: () => void
  onLogin?: () => void
  onNavigateHome?: () => void
  onNavigatePosts?: () => void
  onNavigateAbout?: () => void
  onNavigatePrivacy?: () => void
  onNavigateTerms?: () => void
  currentView?: View
}

export function Layout({ children, onCreatePost, onLogin, onNavigateHome, onNavigatePosts, onNavigateAbout, onNavigatePrivacy, onNavigateTerms, currentView }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onCreatePost={onCreatePost} 
        onLogin={onLogin}
        onNavigateHome={onNavigateHome}
        onNavigatePosts={onNavigatePosts}
        onNavigateAbout={onNavigateAbout}
        currentView={currentView}
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