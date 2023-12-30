export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">
            Escola d'Ensenyances de Gurdjieff
          </span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Escola d'Ensenyances de Gurdjieff - Tots
          els drets reservats
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="/politica-de-privacitat" className="text-gray-500">
            Política de Privacitat
          </a>
          <a href="/avis-legal" className="ml-4 text-gray-500">
            Avís Legal
          </a>
          <a href="/contacte" className="ml-4 text-gray-500">
            Contacte
          </a>
        </span>
      </div>
    </footer>
  );
}
