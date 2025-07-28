import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Scale, 
  FileText, 
  Mail, 
  Calendar,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

interface TermsPageProps {
  onNavigateHome: () => void
}

export function TermsPage({ onNavigateHome }: TermsPageProps) {
  const lastUpdated = "28 de julio de 2025"

  const sections = [
    {
      id: "acceptance",
      title: "1. Aceptación de los Términos",
      content: `Al acceder y utilizar Oscar Blog, usted acepta estar sujeto a estos Términos de Uso y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.`
    },
    {
      id: "description",
      title: "2. Descripción del Servicio",
      content: `Oscar Blog es una plataforma de publicación de contenido que permite a los usuarios crear, compartir y leer artículos sobre tecnología, desarrollo y temas relacionados. El servicio se proporciona "tal como está" y puede modificarse o discontinuarse en cualquier momento.`
    },
    {
      id: "accounts",
      title: "3. Cuentas de Usuario",
      content: `Para crear contenido, debe registrar una cuenta proporcionando información precisa y actualizada. Es responsable de mantener la confidencialidad de su cuenta y contraseña, y de todas las actividades que ocurran bajo su cuenta.`
    },
    {
      id: "content",
      title: "4. Contenido del Usuario",
      content: `Usted conserva los derechos de autor y otros derechos de propiedad sobre el contenido que publique. Al publicar contenido, nos otorga una licencia no exclusiva, mundial y libre de regalías para usar, reproducir, modificar y distribuir su contenido en conexión con el servicio.`
    },
    {
      id: "prohibited",
      title: "5. Uso Prohibido",
      content: `No puede usar Oscar Blog para: (a) publicar contenido ilegal, difamatorio o que infrinja derechos de terceros; (b) acosar o amenazar a otros usuarios; (c) distribuir malware o realizar actividades maliciosas; (d) intentar acceder no autorizado a nuestros sistemas.`
    },
    {
      id: "intellectual",
      title: "6. Propiedad Intelectual",
      content: `El diseño, código fuente, logotipos y otros elementos de Oscar Blog están protegidos por derechos de autor y otras leyes de propiedad intelectual. No puede reproducir, distribuir o crear trabajos derivados sin autorización expresa.`
    },
    {
      id: "privacy",
      title: "7. Privacidad",
      content: `Su privacidad es importante para nosotros. El uso de sus datos personales se rige por nuestra Política de Privacidad, que forma parte integral de estos términos.`
    },
    {
      id: "termination",
      title: "8. Terminación",
      content: `Podemos terminar o suspender su cuenta inmediatamente, sin previo aviso, por cualquier motivo, incluyendo el incumplimiento de estos Términos de Uso.`
    },
    {
      id: "disclaimers",
      title: "9. Limitación de Responsabilidad",
      content: `Oscar Blog no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar el servicio, incluso si hemos sido advertidos de la posibilidad de tales daños.`
    },
    {
      id: "governing",
      title: "10. Ley Aplicable",
      content: `Estos términos se regirán por las leyes de España y la Unión Europea. Cualquier disputa será resuelta en los tribunales competentes de Madrid, España.`
    },
    {
      id: "changes",
      title: "11. Modificaciones",
      content: `Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.`
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Términos de Uso
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Condiciones generales de uso de Oscar Blog. Lea atentamente antes de utilizar nuestros servicios.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Última actualización: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Aviso Importante</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Al utilizar Oscar Blog, usted acepta automáticamente estos términos de uso. 
                Si no está de acuerdo con alguna de las condiciones establecidas, 
                le recomendamos que no utilice nuestros servicios.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Resumen Rápido
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Conserva los derechos de su contenido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Uso gratuito del servicio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Protección de datos personales</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Prohibido contenido ilegal o dañino</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Responsabilidad sobre su cuenta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Términos sujetos a cambios</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms Sections */}
      <div className="space-y-6">
        {sections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Information */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-6 h-6" />
              <h3 className="text-2xl font-bold">¿Preguntas sobre estos términos?</h3>
            </div>
            <p className="text-blue-100 text-lg">
              Si tiene alguna pregunta sobre estos Términos de Uso, no dude en contactarnos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Mail className="w-4 h-4 mr-2" />
                Contactar Soporte
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={onNavigateHome}
              >
                <Shield className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Last Updated Info */}
      <div className="text-center text-sm text-gray-500 py-4">
        <div className="flex items-center justify-center gap-2">
          <FileText className="w-4 h-4" />
          <span>Documento actualizado el {lastUpdated}</span>
        </div>
        <p className="mt-2">
          Versión 1.0 - Estos términos están sujetos a cambios periódicos
        </p>
      </div>
    </div>
  )
}