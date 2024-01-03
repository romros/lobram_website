import React from "react";
import Image from "next/image";
import { overlock, quattrocento } from "@/app/ui/fonts";

export interface GrupsDeTreballProps {}

export default function DancesSection(props: GrupsDeTreballProps) {
  return (
    <div
      className={` ${overlock.className} text-xl  flex flex-col justify-center items-center my-8 text-slate-950`}
    >
      <div className="relative h-[550px]">
        <Image
          src="/grup_abrasat.png"
          alt="Grup Abraçat"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30" // Ajusta aquest valor segons la teva preferència per la visibilitat del text
        />

        <h1
          className={`${quattrocento.className} text-center  text-xl lg:text-3xl font-semibold mb-4`}
        >
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
          Amb grups per a tots els nivells, la teva jornada es personalitzarà
          per aprofundir en la pràctica a mesura que avances. A Lo Bram, et
          convidem a començar aquest viatge transformador; el nostre proper curs
          inicia a finals de gener.
        </p>
      </div>
    </div>
  );
}
