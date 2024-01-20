"use client";
import ContactMap from "@/components/contactMap/contactMap";
import { fetchMainContactMap } from "../lib/data";
import { usePathname } from "next/navigation";

export default async function Footer() {
  const pathname = usePathname();
  // Comprova si la ruta actual comença amb /studio/
  const isStudioRoute = pathname.startsWith("/studio");

  const contactData = await fetchMainContactMap();
  //console.log(contactData);
  const lang = "ca";

  const messages_lang = {
    nameRequired: contactData?.messages?.nameRequired?.[lang],
    sendError: contactData?.messages?.sendError?.[lang],
    sending: contactData?.messages?.sending?.[lang],
    sendSuccess: contactData?.messages?.sendSuccess?.[lang],
    consentRequired: contactData?.messages?.consentRequired?.[lang],
    emailRequired: contactData?.messages?.emailRequired?.[lang],
    messageRequired: contactData?.messages?.messageRequired?.[lang],
  };

  const formulari_lang = {
    text_enviar: contactData?.formulari?.text_enviar?.[lang],
    text_missatge: contactData?.formulari?.text_missatge?.[lang],
    text_email: contactData?.formulari?.text_email?.[lang],
    text_politica: contactData?.formulari?.text_politica?.[lang],
    text_nom: contactData?.formulari?.text_nom?.[lang],
  };
  //console.log(messages_lang);
  return (
    <footer className="bg-slate-950 text-gray-700 body-font">
      {!isStudioRoute && (
        <ContactMap
          lang={lang}
          title={contactData.title?.[lang]}
          description={contactData.description?.[lang]}
          backgroundColor="bg-slate-900"
          messages={messages_lang}
          formulari={formulari_lang}
          address={contactData.address?.[lang]}
        />
      )}
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
