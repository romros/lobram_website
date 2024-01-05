import Hero from "@/components/hero";
import EnsenyantsTreball from "./ui/ensenyants_treball";
import GrupsDeTreballSection from "./ui/grup_de_treball";
import { FastContactForm } from "./ui/contact_form";

export default function DancesPage() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full ">
        <div className="w-full lg:w-1/3 bg-blue-100 p-4">
          <GrupsDeTreballSection />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center lg:p-4 bg-gradient-to-b lg:bg-gradient-to-r from-blue-100 to-blue-900">
          <img
            src="/flor_transparent.png"
            alt="Flor Transparent"
            className="max-h-full  sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-full"
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
