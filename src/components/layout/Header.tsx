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
import { LogOut, User, PenTool } from 'lucide-react'

interface HeaderProps {
  onCreatePost?: () => void
  onLogin?: () => void
  onNavigateHome?: () => void
  onNavigatePosts?: () => void
  onNavigateAbout?: () => void
}

export function Header({ onCreatePost, onLogin, onNavigateHome, onNavigatePosts, onNavigateAbout }: HeaderProps) {
  const { user, signOut } = useAuth()

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
            <h1 className="text-2xl font-bold text-primary">Oscar Blog</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onNavigateHome}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={onNavigatePosts}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Posts
            </button>
            <button 
              onClick={onNavigateAbout}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Acerca de
            </button>
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
              <Button variant="outline" size="sm" onClick={onLogin}>
                Iniciar Sesión
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}