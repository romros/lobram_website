import Hero from "@/components/hero";
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
        title="Escola d'Ensenyances de Gurdjieff"
        description="Som un grup dedicat al treball personal i autoconeixement, inspirats
        en els ensenyaments del 4rt camí de Gurdjieff. Oferim un espai per
        explorar el creixement interior a través de pràctiques contemplatives,
        diàlegs guiats i exercicis pràctics que busquen l'harmonia entre cos,
        ment i esperit."
        text_button="Veure activitats"
        link_button="/activitats"
      />
      <Historia
        image="/sala_buda.jpg"
        title="Espai Lo Bram"
        description="<p>
        Lo Bram, un refugi de pau i aprenentatge, convida a la descoberta del 4rt Camí
        i les Danses Sagrades de Gurdjieff. En aquest lloc acollidor, ple de llum i
        espai, s'obren oportunitats per a pràctiques meditatives i tallers
        enriquidors.
      </p>
      <p>
        Conscients del valor d'un entorn segur,
        <strong>oferim la possibilitat de llogar aquest espai especial</strong> per a
        activitats que harmonitzin amb valors de creixement i comunitat. A Lo Bram,
        cada recó és una invitació a créixer i compartir junts.
      </p>
      "
        foto_esquerra={true}
        link_button="/lespai"
        text_button="Veure l'espai"
      />
    </main>
  );
}
