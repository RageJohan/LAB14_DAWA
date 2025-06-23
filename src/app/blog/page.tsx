import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Mi Proyecto SEO",
  description:
    "Lee nuestras últimas publicaciones sobre tecnología, desarrollo web, SEO y mejores prácticas digitales.",
  openGraph: {
    title: "Blog | Mi Proyecto SEO",
    description: "Artículos actualizados del mundo tech y desarrollo web.",
    type: "website",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "Optimización SEO para Next.js 15",
    description: "Aprende las mejores técnicas para optimizar tu aplicación Next.js para motores de búsqueda.",
    author: "María García",
    date: "15 Dic 2024",
    readTime: "5 min",
    category: "SEO",
    featured: true,
  },
  {
    id: 2,
    title: "Guía Completa de React Server Components",
    description: "Todo lo que necesitas saber sobre los Server Components en React y Next.js App Router.",
    author: "Carlos López",
    date: "12 Dic 2024",
    readTime: "8 min",
    category: "React",
  },
  {
    id: 3,
    title: "Mejores Prácticas de Tailwind CSS",
    description: "Consejos y trucos para escribir CSS más eficiente con Tailwind CSS.",
    author: "Ana Martínez",
    date: "10 Dic 2024",
    readTime: "6 min",
    category: "CSS",
  },
  {
    id: 4,
    title: "TypeScript: Tips Avanzados",
    description: "Técnicas avanzadas de TypeScript para desarrolladores experimentados.",
    author: "David Rodríguez",
    date: "8 Dic 2024",
    readTime: "10 min",
    category: "TypeScript",
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <span className="mr-2">←</span>
              Volver al Inicio
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="/blog" className="text-blue-600 font-medium">
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
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestro Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre las últimas tendencias en tecnología, desarrollo web y mejores prácticas para crear experiencias
            digitales excepcionales.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículo Destacado</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4">
                      {featuredPost.category}
                    </span>
                    <div className="text-4xl font-bold">DESTACADO</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-1">👤</span>
                    <span className="mr-4">{featuredPost.author}</span>
                    <span className="mr-1">📅</span>
                    <span className="mr-4">{featuredPost.date}</span>
                    <span className="mr-1">⏱️</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Leer Artículo Completo
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Últimos Artículos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-1">⏱️</span>
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-1">👤</span>
                  <span className="mr-4">{post.author}</span>
                  <span className="mr-1">📅</span>
                  <span>{post.date}</span>
                </div>
                <button className="w-full bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Leer Más
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿No te quieres perder nada?</h3>
          <p className="mb-6">
            Suscríbete a nuestro newsletter y recibe los últimos artículos directamente en tu email.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Suscribirse al Newsletter
          </button>
        </section>
      </main>
    </div>
  )
}
