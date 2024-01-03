import React from "react";

import Image from "next/image";
export interface DancesSectionProps {}

export default function DancesSection(props: DancesSectionProps) {
  return (
    <div className="text-slate-300 flex flex-col justify-center items-center my-8">
      <h1 className="text-xl lg:text-2xl font-semibold mb-4">
        Grups de Treball
      </h1>

      <p className="text-xs lg:text-sm">
        Participa en un grup de treball contemporani del Quart Camí, on
        s'aborden temes clau per a l'autoconeixement i el desenvolupament
        interior. Els nostres grups, que es reuneixen els divendres, ofereixen
        un espai de confiança i profunditat, amb un nombre reduït de
        participants i un equip d'ensenyants experimentats.
      </p>
      <p className="text-xs lg:text-sm mt-4">
        Amb grups per a tots els nivells, la teva jornada es personalitzarà per
        aprofundir en la pràctica a mesura que avances. A Lo Bram, et convidem a
        començar aquest viatge transformador; el nostre proper curs inicia a
        finals de gener.
      </p>
    </div>
  );
}
