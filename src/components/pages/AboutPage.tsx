import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Code, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Target,
  Github,
  Twitter,
  Mail
} from 'lucide-react'

interface AboutPageProps {
  onCreatePost: () => void
  isAuthenticated: boolean
}

export function AboutPage({ onCreatePost, isAuthenticated }: AboutPageProps) {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Contenido de Calidad",
      description: "Artículos cuidadosamente curados sobre tecnología, desarrollo y más."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidad Activa",
      description: "Una comunidad vibrante de escritores y lectores apasionados."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tecnología Moderna",
      description: "Construido con React, TypeScript, Tailwind CSS y Supabase."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovación Constante",
      description: "Siempre mejorando y agregando nuevas funcionalidades."
    }
  ]

  const techStack = [
    { name: "React 19", color: "bg-blue-100 text-blue-800" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
    { name: "Supabase", color: "bg-green-100 text-green-800" },
    { name: "Vite", color: "bg-purple-100 text-purple-800" },
    { name: "shadcn/ui", color: "bg-gray-100 text-gray-800" },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Acerca de Oscar Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Una plataforma moderna para compartir ideas, conocimientos y experiencias. 
            Construida con las mejores tecnologías y pensada para la comunidad.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Hecho con amor para la comunidad de desarrolladores</span>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Democratizar el acceso al conocimiento y crear una plataforma donde cualquier persona 
              pueda compartir sus ideas, aprender de otros y contribuir al crecimiento colectivo 
              de la comunidad tecnológica.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">¿Por qué Oscar Blog?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Interfaz moderna y fácil de usar</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Editor de Markdown potente y intuitivo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Diseño responsive que funciona en cualquier dispositivo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Comunidad enfocada en la calidad del contenido</span>
              </li>
            </ul>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
              OB
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Oscar Blog</h3>
              <p className="text-gray-600">
                Tu plataforma de confianza para compartir y descubrir contenido de calidad
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Open Source</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Características Destacadas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre todo lo que Oscar Blog tiene para ofrecer a escritores y lectores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <Card className="p-8">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Stack Tecnológico</CardTitle>
          <p className="text-center text-gray-600 mt-2">
            Construido con las mejores tecnologías modernas
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <Badge key={index} className={`${tech.color} px-3 py-1`} variant="secondary">
                {tech.name}
              </Badge>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              Ver Código Fuente
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">
          ¿Tienes alguna pregunta?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Nos encantaría conocer tu opinión y sugerencias para mejorar la plataforma
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
            <Mail className="w-4 h-4" />
            Contactar
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
            <Twitter className="w-4 h-4" />
            Síguenos
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      {!isAuthenticated && (
        <div className="text-center space-y-6 py-12 bg-gray-50 rounded-2xl">
          <h3 className="text-3xl font-bold text-gray-900">
            ¿Listo para ser parte de la comunidad?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Únete a Oscar Blog y comienza a compartir tus conocimientos con el mundo
          </p>
          <Button onClick={onCreatePost} size="lg" className="gap-2">
            <BookOpen className="w-5 h-5" />
            Comenzar a Escribir
          </Button>
        </div>
      )}
    </div>
  )
}