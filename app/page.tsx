import { overlock, quattrocento } from "@/app/ui/fonts";
import Hero from "./ui/hero";
import Historia from "@/components/history";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Escola d'Ensenyances de Gurdjieff"
        subtitle="Grups d'autoconeixement inspirats en 4rt camí"
        backgroundImage="foto_casa_original.jpg"
        logo="/logo_bram.png"
      />
      <Historia
        image="/grup2.jpeg"
        title_font={overlock.className}
        description_font={quattrocento.className}
        title="Escola d'Ensenyances de Gurdjieff"
        description="Som un grup dedicat al treball personal i autoconeixement, inspirats
        en els ensenyaments del 4rt camí de Gurdjieff. Oferim un espai per
        explorar el creixement interior a través de pràctiques contemplatives,
        diàlegs guiats i exercicis pràctics que busquen l'harmonia entre cos,
        ment i esperit."
        text_button="Veure activitats"
        backgroud_color_button="blue-700"
        text_color_button="white"
        link_button="/activitats"
      />
    </main>
  );
}
