import ContactMap from "@/components/contactMap";
import { fetchMainContactMap } from "../lib/data";

export default async function Footer() {
  const contactData = await fetchMainContactMap();
  return (
    <footer className="bg-slate-950 text-gray-700 body-font">
      <ContactMap
        lang="ca"
        title={contactData.title}
        description={contactData.description}
        backgroundColor="bg-slate-900"
        messages={contactData.messages}
        formulari={contactData.formulari}
        address={contactData.address}
      />

      <div className="container px-5 py-0  mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-slate-200">
          <span className="ml-3 text-base">
            Escola d'Ensenyances de Gurdjieff
          </span>
        </a>
        <p className="text-sm text-slate-400 sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Escola d'Ensenyances de Gurdjieff - Tots
          els drets reservats
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-slate-300">
          <a href="/politica-de-privacitat">Política de Privacitat</a>
          <a href="/avis-legal" className="ml-4">
            Avís Legal
          </a>
          <a href="/contacte" className="ml-4">
            Contacte
          </a>
        </span>
      </div>
    </footer>
  );
}
