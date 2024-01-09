import React from "react";
import MiniFitxa from "@/components/mini_fitxa";
import Narrativa from "@/components/narrativa";
import { quattrocento } from "@/app/ui/fonts";

export interface GrupsDeTreballProps {}

export default function DancesSection(props: GrupsDeTreballProps) {
  return (
    <div
      className={`text-xl  flex flex-col justify-center items-center my-8 text-slate-950`}
    >
      <Narrativa
        titol={{ ca: "Grups de Treball" }}
        p_classname="mb-2"
        descripcio={{
          ca: `Entendre els "Grups de Treball" com a part essencial de l'ensenyament del Quart Camí és comprendre la cerca d'un creixement personal profund i connectat. Aquests grups són reunions setmanals on els participants s'endinsen en temes vitals com l'atenció conscient, la presència i l'harmonia interior i exterior. En un ambient col·laboratiu, es treballa per integrar les ensenyances en la vida quotidiana, buscant un estat d'ésser més despert i intencionat.

Els divendres es converteixen en un punt de trobada on grups reduïts, d'unes dotze persones, es reuneixen per compartir i explorar sota la guia de tres o quatre ensenyants. La dinàmica dels grups està dissenyada per funcionar en diferents nivells, oferint a cada participant un recorregut a mida. A mesura que els estudiants avancen, el treball es torna més intens i es dediquen més hores, permetent una immersió més profunda en els principis i pràctiques del Quart Camí.`,
        }}
      />
      <Narrativa
        titol={{ ca: "Sents dins teu que és moment d'un canvi?" }}
        titol_classname={` ${quattrocento.className} text-lg lg:text-2xl my-4 text-center font-semibold`}
        descripcio={{
          ca: `Descobreix un viatge d'autoconeixement i harmonia. Introdueix-te al 4t Camí de Gurdjieff: una ruta cap a una vida desperta i atenta. Impartit per facilitadors apassionats amb 4 anys d'immersió en la pràctica i en una escola on es predica amb l'exemple.

Aquest és més que un curs; és una invitació a:
* Cultivar una atenció conscient i constant.
* Conèixer les nostres pròpies personalitats, l'esforç conscient i la felicitat de superar els nostres falsos límits.
* Connectar amb la teva essència i descobrir el teu propi propòsit. Sense oblidar en tot moment l'alegria i l'humor.`,
        }}
      />
      <MiniFitxa
        lang="ca"
        container_classname="mb-6 mt-6"
        titol={{ ca: "Curs Introductori" }}
        subtitol={{ ca: "Duració: 1 any - Proper inici: Gener 2024" }}
        descripcio={{
          ca: `Si et ressona que has de fer alguna cosa amb tú mateix/a o simplement busques aprofundir en l'atenció, la concentració i la constància, aquest és el teu espai.`,
        }}
        alt_image={{ ca: "Foto de curs" }}
        color_titol="text-slate-950"
        color_subtitol="text-slate-700"
        color_descripcio="text-slate-900"
        image="/curs_introductori.png"
        image_width={800}
        image_height={800}
        is_modal={true}
        border_color="blue-700"
        has_border={true}
      />
    </div>
  );
}
