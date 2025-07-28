import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Cookie, 
  Settings, 
  X, 
  Shield, 
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'

interface CookieConsentProps {
  onAcceptAll: () => void
  onAcceptSelected: (preferences: CookiePreferences) => void
  onReject: () => void
}

interface CookiePreferences {
  essential: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent({ onAcceptAll, onAcceptSelected, onReject }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    onAcceptAll()
  }

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    onAcceptSelected(preferences)
  }

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    onReject()
  }

  const updatePreference = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <Card className="w-full max-w-4xl pointer-events-auto shadow-2xl border-2 border-blue-200">
        <CardContent className="p-0">
          {!showDetails ? (
            // Simple Banner View
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      🍪 Utilizamos cookies para mejorar su experiencia
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales para 
                      análisis y personalización. Puede configurar sus preferencias o aceptar todas las cookies.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>Cumple con RGPD • Puede cambiar sus preferencias en cualquier momento</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button onClick={handleAcceptAll} className="gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Aceptar Todas
                </Button>
                
                <Button variant="outline" onClick={() => setShowDetails(true)} className="gap-2">
                  <Settings className="w-4 h-4" />
                  Configurar
                </Button>
                
                <Button variant="ghost" onClick={handleRejectAll} className="gap-2">
                  <X className="w-4 h-4" />
                  Solo Esenciales
                </Button>
              </div>
            </div>
          ) : (
            // Detailed Configuration View
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Configuración de Cookies
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="gap-2"
                >
                  <X className="w-4 h-4" />
                  Cerrar
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                Configure qué tipos de cookies desea permitir. Las cookies esenciales son necesarias 
                para el funcionamiento básico del sitio y no se pueden desactivar.
              </p>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-medium text-green-800">Cookies Esenciales</h4>
                        <p className="text-xs text-green-600">Necesarias para el funcionamiento del sitio</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Siempre activas
                    </Badge>
                  </div>
                  <p className="text-xs text-green-700">
                    Autenticación, sesión de usuario, configuración de idioma y funcionalidades básicas.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Info className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-800">Cookies Funcionales</h4>
                        <p className="text-xs text-gray-600">Mejoran la funcionalidad y personalización</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => updatePreference('functional', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Recordar preferencias del tema, configuración del editor, modo de visualización.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Info className="w-5 h-5 text-purple-600" />
                      <div>
                        <h4 className="font-medium text-gray-800">Cookies de Análisis</h4>
                        <p className="text-xs text-gray-600">Nos ayudan a mejorar el sitio web</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Datos anónimos sobre uso del sitio, páginas más visitadas, tiempo de permanencia.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      <div>
                        <h4 className="font-medium text-gray-800">Cookies de Marketing</h4>
                        <p className="text-xs text-gray-600">Personalización de contenido y publicidad</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Seguimiento para contenido personalizado y publicidad relevante (actualmente no utilizado).
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <Shield className="w-4 h-4 text-blue-600" />
                <p className="text-xs text-blue-700">
                  <strong>Sus derechos:</strong> Puede cambiar estas preferencias en cualquier momento desde 
                  la configuración del sitio o contactándonos en privacy@oscar-blog.com
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Button onClick={handleAcceptSelected} className="gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Guardar Preferencias
                </Button>
                
                <Button variant="outline" onClick={handleAcceptAll} className="gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Aceptar Todas
                </Button>
                
                <Button variant="ghost" onClick={handleRejectAll} className="gap-2">
                  <X className="w-4 h-4" />
                  Solo Esenciales
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Cookie management utilities
export const getCookieConsent = (): CookiePreferences | null => {
  const consent = localStorage.getItem('cookie-consent')
  return consent ? JSON.parse(consent) : null
}

export const hasCookieConsent = (): boolean => {
  return localStorage.getItem('cookie-consent') !== null
}

export const resetCookieConsent = (): void => {
  localStorage.removeItem('cookie-consent')
  localStorage.removeItem('cookie-consent-date')
}

// Cookie consent context hook
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookiePreferences | null>(null)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const storedConsent = getCookieConsent()
    if (storedConsent) {
      setConsent(storedConsent)
      setHasConsent(true)
    }
  }, [])

  const updateConsent = (newConsent: CookiePreferences) => {
    setConsent(newConsent)
    setHasConsent(true)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
  }

  const resetConsent = () => {
    setConsent(null)
    setHasConsent(false)
    resetCookieConsent()
  }

  return {
    consent,
    hasConsent,
    updateConsent,
    resetConsent
  }
}