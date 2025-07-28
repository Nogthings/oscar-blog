interface FooterProps {
  onNavigatePrivacy?: () => void
  onNavigateTerms?: () => void
}

export function Footer({ onNavigatePrivacy, onNavigateTerms }: FooterProps) {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Oscar Blog. Construido con React, TypeScript y Supabase.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onNavigatePrivacy}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
            </button>
            <button
              onClick={onNavigateTerms}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Términos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}