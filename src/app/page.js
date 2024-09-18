import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Mubi Pilates</span>
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="Logo de Mubi Pilates"
            className="h-8 w-8"
          />
          <span className="ml-2 text-2xl font-bold text-gray-900">Mubi Pilates</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900" href="#">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900" href="#">
            Clases
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900" href="#">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-900" href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Transforma tu Cuerpo y Mente con Mubi Pilates
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Experimenta el poder del Pilates en el corazón de Chile. Únete a nuestras clases personalizadas que
                  fortalecerán tu core, mejorarán tu flexibilidad y potenciarán tu bienestar general.
                </p>
              </div>
              <div className="space-x-4">
                <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-900 text-white hover:bg-gray-800 h-10 py-2 px-4">
                  Reserva una Clase
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-gray-900 text-gray-900 hover:bg-gray-100 h-10 py-2 px-4">
                  Conoce Más
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">
              ¿Por qué elegir Mubi Pilates?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="p-3 bg-gray-100 rounded-full">
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                    <path d="m2 17 10 5 10-5" />
                    <path d="m2 12 10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Instructores Expertos</h3>
                <p className="text-sm text-gray-700 text-center">
                  Nuestros instructores certificados de Pilates aportan años de experiencia a cada clase. Además, la dueña es la más linda del mundo.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="p-3 bg-gray-100 rounded-full">
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Estudio de Última Generación</h3>
                <p className="text-sm text-gray-700 text-center">
                  Practica en nuestro moderno estudio de Pilates totalmente equipado en el corazón de Chile.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="p-3 bg-gray-100 rounded-full">
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enfoque Personalizado</h3>
                <p className="text-sm text-gray-700 text-center">
                  Adaptamos nuestras clases para satisfacer tus necesidades individuales y objetivos de fitness.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">¿Listo para Transformar tu Vida?</h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a Mubi Pilates hoy y comienza tu viaje hacia un tú más fuerte y flexible.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Ingresa tu email"
                    type="email"
                  />
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-900 text-white hover:bg-gray-800 h-10 py-2 px-4"
                    type="submit"
                  >
                    Suscribirse
                  </button>
                </form>
                <p className="text-xs text-gray-700">
                  Regístrate para recibir notificaciones sobre nuevas clases y ofertas especiales.
                  <Link className="underline underline-offset-2 text-gray-900" href="#">
                    Términos y Condiciones
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-700">© 2023 Mubi Pilates. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}