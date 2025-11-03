export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-center text-4xl font-bold text-gray-800 md:text-6xl dark:text-white">
            FILIAL LA PINTANA
          </h1>
          <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
            Bienvenidos a nuestra filial
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="rounded-lg bg-white p-8 shadow-xl md:p-12 dark:bg-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              Nuestra Misión
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Atención al Cliente
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Asesoría Especializada
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Soporte Técnico
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum sed ut
                perspiciatis unde omnis.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
                Sobre Nosotros
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet.
              </p>
            </div>
            <div className="rounded-lg bg-linear-to-br from-blue-400 to-indigo-600 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-white"></span>
                  Experiencia comprobada en el mercado
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-white"></span>
                  Atención personalizada y profesional
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-white"></span>
                  Compromiso con la excelencia
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-white"></span>
                  Innovación constante
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-lg bg-white p-8 shadow-xl md:p-12 dark:bg-gray-800">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Contáctanos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Información de Contacto
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Dirección:</span> La Pintana,
                  Santiago
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Teléfono:</span> +56 2 XXXX
                  XXXX
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Email:</span>{' '}
                  info@filialpintana.cl
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                Horarios de Atención
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Lunes a Viernes:</span> 9:00 -
                  18:00
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Sábados:</span> 9:00 - 14:00
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Domingos:</span> Cerrado
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 py-8 text-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2 text-lg font-semibold">FILIAL LA PINTANA</p>
          <p className="text-gray-300">
            © 2025 Todos los derechos reservados. Nam libero tempore, cum
            soluta nobis est eligendi optio cumque.
          </p>
        </div>
      </footer>
    </div>
  );
}
