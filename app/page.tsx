import ContactMap from "@/components/contactMap";
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
        // vull escriure un text llarg en html dins de "description" però no sé com fer-ho
        description="<p>Lo Bram, un refugi de pau i aprenentatge, convida a la descoberta del 4rt Camí 
        i les Danses Sagrades de Gurdjieff. En aquest lloc acollidor, ple de llum i
        espai, s'obren oportunitats per a pràctiques meditatives i tallers
        enriquidors.</p><p>Conscients del valor d'un entorn segur, <strong>oferim la possibilitat de llogar aquest espai especial</strong> per a
        activitats que harmonitzin amb valors de creixement i comunitat. A Lo Bram,
        cada recó és una invitació a créixer i compartir junts.</p>"
        foto_esquerra={true}
        link_button="/lespai"
        text_button="Veure l'espai"
      />
      <Historia
        image="/grup_dances.jpg"
        title="Dances sagrades de Gurdjieff"
        description="<p>Des de setembre de 2023, Lo Bram esdevé l'escenari d'un curs profund en
          l'art dels <strong >Moviments de Gurdjieff</strong>.</p><p>Un espai on respirar la tranquil·litat i endinsar-se en un treball interior que enllaça l'antiga saviesa amb la pràctica contemporània. Durant tres anys, els caps de setmana es transformen en un temps dedicat a la reflexió i l'aprenentatge, on cada gest i moviment s'infon de significat.</p><p>Aquí, a tocar de Barcelona, trobaràs una comunitat càlida, pronta a acollir-te en aquesta exploració del ser. </p>"
        foto_esquerra={false}
        link_button="https://danzasgurdjieff7.wordpress.com"
        text_button="Veure informació del curs"
      />
      <ContactMap
        title="Posa't en Contacte"
        description="Si tens alguna pregunta, no dubtis en contactar-nos. Estarem encantats d'atendre't."
        // color del fons del formulari: fosc blau
        backgroundColor="#e5e7eb"
      />
    </main>
  );
}
