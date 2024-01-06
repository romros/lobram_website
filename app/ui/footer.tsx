import ContactMap from "@/components/contactMap";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-700 body-font">
      <ContactMap
        title="Posa't en Contacte"
        description="Si tens alguna pregunta, no dubtis en contactar-nos. <br/>Estarem encantats d'atendre't."
        // color del fons del formulari: fosc blau
        backgroundColor="bg-slate-900"
        messages={{
          nameRequired: "El nom és obligatori.",
          emailRequired: "L'email és obligatori.",
          messageRequired: "El missatge és obligatori.",
          consentRequired: "Has d'acceptar el consentiment de dades.",
          sending: "Enviant...",
          sendSuccess: "Missatge enviat! Gràcies 🌟",
          sendError: "No s'ha pogut enviar el missatge. Intenta-ho de nou.",
        }}
        mapa={{
          idioma: "ca",
          lloc: "Lo Bram sccl",
        }}
      />
      <div className="container px-5 py-0  mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-slate-200">
          <span className="ml-3 text-xl">
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
