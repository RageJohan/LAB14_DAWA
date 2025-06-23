import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Inicio | Mi Proyecto SEO",
  description:
    "Bienvenido a la página de inicio de nuestro proyecto optimizado para SEO. Descubre contenido de calidad y servicios profesionales.",
  openGraph: {
    title: "Inicio | Mi Proyecto SEO",
    description: "Explora nuestra página de inicio, optimizada para buscadores y redes sociales.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">★</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Mi Proyecto SEO</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Bienvenido a Mi Proyecto SEO</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre contenido de calidad, optimizado para buscadores y diseñado para ofrecerte la mejor experiencia
            digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span className="mr-2">📚</span>
              Explorar Blog
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <span className="mr-2">✉️</span>
              Contáctanos
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📚</span>
              <h3 className="text-xl font-semibold text-gray-900">Blog Actualizado</h3>
            </div>
            <p className="text-gray-600 mb-4">Contenido fresco y relevante sobre tecnología y desarrollo web</p>
            <p className="text-gray-600 mb-6">
              Mantente al día con las últimas tendencias, tutoriales y mejores prácticas del mundo del desarrollo web.
            </p>
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Leer Artículos
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">✉️</span>
              <h3 className="text-xl font-semibold text-gray-900">Contacto Directo</h3>
            </div>
            <p className="text-gray-600 mb-4">Estamos aquí para ayudarte con tus proyectos</p>
            <p className="text-gray-600 mb-6">
              ¿Tienes una pregunta o necesitas ayuda con tu proyecto? No dudes en ponerte en contacto con nosotros.
            </p>
            <Link href="/contacto" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
              Escribenos
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Artículos Publicados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Lectores Mensuales</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Soporte Disponible</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Mi Proyecto SEO. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
