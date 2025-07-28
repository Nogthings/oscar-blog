import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/contexts/AuthContext'
import { LogOut, User, PenTool, Menu, X } from 'lucide-react'
import { useState } from 'react'

type View = 'home' | 'posts' | 'about' | 'create' | 'edit' | 'detail' | 'login' | 'terms' | 'privacy'

interface HeaderProps {
  onCreatePost?: () => void
  onLogin?: () => void
  onNavigateHome?: () => void
  onNavigatePosts?: () => void
  onNavigateAbout?: () => void
  currentView?: View
}

interface NavLinkProps {
  isActive: boolean
  onClick?: () => void
  children: React.ReactNode
}

function NavLink({ isActive, onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative text-sm font-medium transition-all duration-300 ease-out
        hover:text-primary hover:scale-105 active:scale-95 px-3 py-2
        ${isActive 
          ? 'text-primary font-semibold' 
          : 'text-muted-foreground hover:text-foreground'
        }
      `}
    >
      <span className="relative z-10 px-1">{children}</span>
      
      {/* Active indicator line */}
      <div 
        className={`
          absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500
          transition-all duration-300 ease-out
          ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}
        `}
      />
      
      {/* Hover glow effect */}
      <div 
        className={`
          absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/10 to-purple-500/10
          transition-all duration-300 ease-out
          ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hover:opacity-100 hover:scale-100'}
        `}
      />
    </button>
  )
}

export function Header({ onCreatePost, onLogin, onNavigateHome, onNavigatePosts, onNavigateAbout, currentView }: HeaderProps) {
  const { user, signOut } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onNavigateHome}
              className="group p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
            >
              <h1 className="text-2xl font-bold text-primary transition-all duration-300 ease-out group-hover:scale-105 group-active:scale-95">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                  Oscar Blog
                </span>
              </h1>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-6 group">
            <NavLink 
              isActive={currentView === 'home'}
              onClick={onNavigateHome}
            >
              Inicio
            </NavLink>
            <NavLink 
              isActive={currentView === 'posts'}
              onClick={onNavigatePosts}
            >
              Posts
            </NavLink>
            <NavLink 
              isActive={currentView === 'about'}
              onClick={onNavigateAbout}
            >
              Acerca de
            </NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {onCreatePost && (
                  <Button onClick={onCreatePost} size="sm" className="hidden sm:flex">
                    <PenTool className="w-4 h-4 mr-2" />
                    Nuevo Post
                  </Button>
                )}
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="" alt={user.email || ''} />
                        <AvatarFallback>
                          {user.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </DropdownMenuItem>
                    {onCreatePost && (
                      <DropdownMenuItem onClick={onCreatePost} className="sm:hidden">
                        <PenTool className="mr-2 h-4 w-4" />
                        <span>Nuevo Post</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button variant="outline" size="sm" onClick={onLogin} className="hidden md:flex">
                Iniciar Sesión
              </Button>
            )}
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`absolute w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden border-b bg-background/95 backdrop-blur transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => {
                onNavigateHome?.()
                setIsMobileMenuOpen(false)
              }}
              className={`
                text-left text-base font-medium transition-all duration-200 py-3 px-4 rounded-md
                ${currentView === 'home' 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }
              `}
            >
              Inicio
            </button>
            <button
              onClick={() => {
                onNavigatePosts?.()
                setIsMobileMenuOpen(false)
              }}
              className={`
                text-left text-base font-medium transition-all duration-200 py-3 px-4 rounded-md
                ${currentView === 'posts' 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }
              `}
            >
              Posts
            </button>
            <button
              onClick={() => {
                onNavigateAbout?.()
                setIsMobileMenuOpen(false)
              }}
              className={`
                text-left text-base font-medium transition-all duration-200 py-3 px-4 rounded-md
                ${currentView === 'about' 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }
              `}
            >
              Acerca de
            </button>
            
            {/* Mobile Create Post Button */}
            {user && onCreatePost && (
              <button
                onClick={() => {
                  onCreatePost()
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 text-left text-base font-medium text-primary hover:bg-primary/10 transition-all duration-200 py-3 px-4 rounded-md mt-6 border-t border-gray-100 pt-6"
              >
                <PenTool className="w-4 h-4" />
                Nuevo Post
              </button>
            )}
            
            {/* Mobile Login Button */}
            {!user && (
              <button
                onClick={() => {
                  onLogin?.()
                  setIsMobileMenuOpen(false)
                }}
                className="text-left text-base font-medium text-primary hover:bg-primary/10 transition-all duration-200 py-3 px-4 rounded-md mt-6 border-t border-gray-100 pt-6"
              >
                Iniciar Sesión
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}