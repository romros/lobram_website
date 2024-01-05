import EnsenyantsTreball from "./ui/ensenyants_treball";
import GrupsDeTreballSection from "./ui/grup_de_treball";
import { FastContactForm } from "./ui/contact_form";
import Image from "next/image";

export default function GrupsDeTreballPage() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full ">
        <div className="w-full lg:w-1/3 bg-blue-100 p-4">
          <GrupsDeTreballSection />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center lg:p-4 bg-gradient-to-b lg:bg-gradient-to-r from-blue-100 to-blue-900">
          <Image
            src="/flor_transparent.png" // La font de la imatge
            alt="Flor Transparent" // Text alternatiu per a la imatge
            width={500} // Defineix una amplada (ajusta segons les teves necessitats)
            height={500} // Defineix una alçada (ajusta segons les teves necessitats)
            style={{ objectFit: "contain" }} // Ajusta la imatge per a que no es deformi
            className="max-h-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-full" // Aplica les classes per a mida màxima
          />
        </div>
        <div className="w-full lg:w-1/3 bg-blue-900 p-4">
          <EnsenyantsTreball />
          <FastContactForm className="pt-6" />
        </div>
      </div>
    </main>
  );
}
