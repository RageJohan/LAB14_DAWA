import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contacto | Mi Proyecto SEO",
  description:
    "Contáctanos para más información sobre nuestros servicios. Estamos aquí para ayudarte con tus proyectos digitales.",
  openGraph: {
    title: "Contacto | Mi Proyecto SEO",
    description: "Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo.",
    type: "website",
  },
}

export default function ContactPage() {
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
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contacto" className="text-blue-600 font-medium">
                Contacto
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o necesitas ayuda con tu proyecto? Estamos aquí para ayudarte. No dudes en ponerte
            en contacto con nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Envíanos un Mensaje</h2>
            <p className="text-gray-600 mb-6">Completa el formulario y te responderemos lo antes posible.</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Tu apellido"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntanos más detalles sobre tu consulta..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <span className="mr-2">✉️</span>
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Información de Contacto</h2>
              <p className="text-gray-600 mb-6">Otras formas de ponerte en contacto con nosotros.</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">contacto@miproyectoseo.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <div className="font-medium text-gray-900">Teléfono</div>
                    <div className="text-gray-600">+34 123 456 789</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <div className="font-medium text-gray-900">Dirección</div>
                    <div className="text-gray-600">
                      Calle Principal 123
                      <br />
                      28001 Madrid, España
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xl">🕒</span>
                  <div>
                    <div className="font-medium text-gray-900">Horario de Atención</div>
                    <div className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 10:00 - 14:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">¿Prefieres Hablar Directamente?</h3>
              <p className="text-gray-600 mb-4">Programa una llamada con nuestro equipo.</p>
              <button className="w-full bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <span className="mr-2">📞</span>
                Programar Llamada
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="text-center">
                <h3 className="font-semibold text-blue-900 mb-2">Respuesta Rápida Garantizada</h3>
                <p className="text-blue-700 text-sm">
                  Nos comprometemos a responder todos los mensajes en menos de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">¿Cuánto tiempo toma recibir una respuesta?</h3>
              <p className="text-gray-600">Normalmente respondemos en menos de 24 horas durante días laborables.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">¿Ofrecen consultas gratuitas?</h3>
              <p className="text-gray-600">
                Sí, ofrecemos una consulta inicial gratuita de 30 minutos para nuevos clientes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
