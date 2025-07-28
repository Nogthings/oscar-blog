import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Lock, 
  Eye, 
  Cookie, 
  Mail, 
  Calendar,
  Database,
  Server,
  UserCheck,
  AlertTriangle,
  CheckCircle,
  Globe,
  Scale,
  Clock
} from 'lucide-react'

interface PrivacyPageProps {
  onNavigateHome: () => void
}

export function PrivacyPage({ onNavigateHome }: PrivacyPageProps) {
  const lastUpdated = "28 de julio de 2025"

  const dataTypes = [
    {
      type: "Datos de Cuenta",
      icon: <UserCheck className="w-5 h-5" />,
      items: ["Email", "Nombre completo", "Fecha de registro"],
      purpose: "Autenticación y gestión de cuenta"
    },
    {
      type: "Contenido",
      icon: <Eye className="w-5 h-5" />,
      items: ["Posts publicados", "Comentarios", "Imágenes subidas"],
      purpose: "Funcionalidad del blog"
    },
    {
      type: "Datos Técnicos",
      icon: <Server className="w-5 h-5" />,
      items: ["Dirección IP", "Navegador", "Dispositivo"],
      purpose: "Seguridad y análisis"
    },
    {
      type: "Cookies",
      icon: <Cookie className="w-5 h-5" />,
      items: ["Sesión", "Preferencias", "Analytics"],
      purpose: "Experiencia personalizada"
    }
  ]

  const rights = [
    {
      right: "Acceso",
      description: "Solicitar una copia de sus datos personales",
      icon: <Eye className="w-4 h-4" />
    },
    {
      right: "Rectificación",
      description: "Corregir datos inexactos o incompletos",
      icon: <CheckCircle className="w-4 h-4" />
    },
    {
      right: "Supresión",
      description: "Solicitar la eliminación de sus datos",
      icon: <AlertTriangle className="w-4 h-4" />
    },
    {
      right: "Portabilidad",
      description: "Recibir sus datos en formato estructurado",
      icon: <Database className="w-4 h-4" />
    },
    {
      right: "Oposición",
      description: "Oponerse al procesamiento de sus datos",
      icon: <Shield className="w-4 h-4" />
    },
    {
      right: "Limitación",
      description: "Restringir el procesamiento en ciertos casos",
      icon: <Lock className="w-4 h-4" />
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-green-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cómo recopilamos, utilizamos y protegemos sus datos personales en Oscar Blog
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Actualizado: {lastUpdated}</span>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <Globe className="w-3 h-3 mr-1" />
              RGPD Compliant
            </Badge>
          </div>
        </div>
      </div>

      {/* GDPR Compliance Notice */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Cumplimiento RGPD</h3>
              <p className="text-green-700 text-sm leading-relaxed">
                Esta política cumple con el Reglamento General de Protección de Datos (RGPD) de la UE 
                y garantiza la protección de sus derechos fundamentales de privacidad y protección de datos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Controller */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-blue-600" />
            Responsable del Tratamiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>Oscar Blog</strong> es el responsable del tratamiento de sus datos personales.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
              <p><strong>Contacto del Delegado de Protección de Datos:</strong></p>
              <p>Email: privacy@oscar-blog.com</p>
              <p>Dirección: Madrid, España</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What Data We Collect */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-purple-600" />
            Datos que Recopilamos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-blue-600">
                  {dataType.icon}
                  <h4 className="font-semibold">{dataType.type}</h4>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {dataType.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 font-medium">
                  Propósito: {dataType.purpose}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legal Basis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600" />
            Base Legal del Tratamiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Consentimiento</h4>
                <p className="text-sm text-blue-600">Para cookies no esenciales y marketing</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Ejecución de Contrato</h4>
                <p className="text-sm text-green-600">Para proporcionar nuestros servicios</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Interés Legítimo</h4>
                <p className="text-sm text-purple-600">Para seguridad y mejoras del servicio</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How We Use Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-5 h-5 text-orange-600" />
            Cómo Utilizamos sus Datos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium">Funcionamiento del Servicio</h4>
                <p className="text-sm text-gray-600">Autenticación, gestión de cuenta y publicación de contenido</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium">Comunicación</h4>
                <p className="text-sm text-gray-600">Notificaciones importantes y actualizaciones del servicio</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium">Seguridad</h4>
                <p className="text-sm text-gray-600">Prevención de fraude y protección contra amenazas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium">Mejora del Servicio</h4>
                <p className="text-sm text-gray-600">Análisis anónimo para optimizar la experiencia del usuario</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Sharing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-red-600" />
            Compartir Datos con Terceros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 text-red-800 mb-2">
                <AlertTriangle className="w-5 h-5" />
                <h4 className="font-semibold">Principio de Minimización</h4>
              </div>
              <p className="text-red-700 text-sm">
                No vendemos, alquilamos ni compartimos sus datos personales con terceros para fines comerciales.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Excepciones limitadas:</h4>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                <li>• Proveedores de servicios esenciales (hosting, autenticación)</li>
                <li>• Cumplimiento de obligaciones legales</li>
                <li>• Protección de derechos y seguridad</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Your Rights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            Sus Derechos bajo el RGPD
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {rights.map((right, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="text-blue-600 mt-0.5">
                  {right.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{right.right}</h4>
                  <p className="text-sm text-gray-600">{right.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Cómo ejercer sus derechos:</strong> Envíe un email a privacy@oscar-blog.com con su solicitud. 
              Responderemos en un plazo máximo de 30 días.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Cookies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-amber-600" />
            Política de Cookies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
              Puede gestionar sus preferencias de cookies en cualquier momento.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-green-800 mb-1">Cookies Esenciales</h4>
                <p className="text-xs text-gray-600">Necesarias para el funcionamiento del sitio</p>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">Siempre activas</Badge>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-blue-800 mb-1">Cookies de Preferencias</h4>
                <p className="text-xs text-gray-600">Recordar sus configuraciones</p>
                <Badge variant="outline" className="mt-2">Opcional</Badge>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-purple-800 mb-1">Cookies de Análisis</h4>
                <p className="text-xs text-gray-600">Mejorar el rendimiento del sitio</p>
                <Badge variant="outline" className="mt-2">Opcional</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Retention */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            Retención de Datos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-gray-700">
              Conservamos sus datos personales solo durante el tiempo necesario para los fines para los que fueron recopilados:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>Datos de cuenta:</strong> Mientras su cuenta esté activa</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>Contenido publicado:</strong> Hasta que lo elimine o cierre su cuenta</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>Datos de análisis:</strong> Máximo 24 meses en formato anonimizado</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>Logs de seguridad:</strong> 12 meses para prevención de fraude</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contact and Exercise Rights */}
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Contacto y Ejercicio de Derechos</h3>
            </div>
            <p className="text-green-100 text-lg">
              Para cualquier consulta sobre privacidad o para ejercer sus derechos RGPD
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Mail className="w-4 h-4 mr-2" />
                privacy@oscar-blog.com
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

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500 py-4">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Política actualizada el {lastUpdated}</span>
        </div>
        <p className="mt-2">
          Versión 1.0 - Cumple con RGPD, LOPDGDD y normativa española vigente
        </p>
      </div>
    </div>
  )
}