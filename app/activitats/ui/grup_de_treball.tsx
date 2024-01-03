import React from "react";
import Image from "next/image";
import { overlock, quattrocento } from "@/app/ui/fonts";

export interface GrupsDeTreballProps {}

export default function DancesSection(props: GrupsDeTreballProps) {
  return (
    <div
      className={` ${overlock.className} text-xl  flex flex-col justify-center items-center my-8 text-slate-950`}
    >
      <div className="relative h-[550px] text-justify">
        <h1
          className={`${quattrocento.className} text-center  text-xl lg:text-3xl font-semibold mb-4`}
        >
          Grups de Treball
        </h1>
        <p className="text-base">
          Entendre els "Grups de Treball" com a part essencial de l'ensenyament
          del Quart Camí és comprendre la cerca d'un creixement personal profund
          i connectat. Aquests grups són reunions setmanals on els participants
          s'endinsen en temes vitals com l'atenció conscient, la presència i
          l'harmonia interior i exterior. En un ambient col·laboratiu, es
          treballa per integrar les ensenyances en la vida quotidiana, buscant
          un estat d'ésser més despert i intencionat.
        </p>
        <p className="text-base">
          Els divendres es converteixen en un punt de trobada on grups reduïts,
          d'unes dotze persones, es reuneixen per compartir i explorar sota la
          guia de tres o quatre ensenyants. La dinàmica dels grups està
          dissenyada per funcionar en diferents nivells, oferint a cada
          participant un recorregut a mida. A mesura que els estudiants avancen,
          el treball es torna més intens i es dediquen més hores, permetent una
          immersió més profunda en els principes i pràctiques del Quart Camí.
        </p>
      </div>
    </div>
  );
}
