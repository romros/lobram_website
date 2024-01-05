import React from "react";
import { overlock, quattrocento } from "@/app/ui/fonts";
import MiniFitxa from "@/components/mini_fitxa";

const teachers = [
  {
    name: "Mònica Rísquez",
    role: "Mestre Principal",
    bio: "Mònica és la guia dels nostres viatges interiors. Amb anys d'experiència, porta la saviesa del Quart Camí a la nostra comunitat.",
    imageUrl: "/monica.jpg", // Substitueix amb la URL real de la imatge
  },
  {
    name: "Roman Roset",
    role: "Curs Introductori",
    bio: "Amb una passió per l'ensenyament, Roman ofereix una introducció profunda als principis del Quart Camí.",
    imageUrl: "/roman.png",
  },
  {
    name: "Patty Escandell",
    role: "Curs Introductori",
    bio: "Patty combina tradició i innovació per a oferir una perspectiva fresca en les pràctiques del Quart Camí.",
    imageUrl: "/patty.jpg",
  },
  {
    name: "Jaume Roca",
    role: "Curs Introductori",
    bio: "Jaume, amb el seu enfocament pràctic, ajuda als estudiants a aplicar els ensenyaments en la seva vida diària.",
    imageUrl: "/jaume.jpg",
  },
];

export interface EnsenyantsTreballProps {}

export default function EnsenyantsTreball(props: EnsenyantsTreballProps) {
  return (
    <div
      className={` ${overlock.className} text-xl  flex flex-col justify-center items-center my-8 text-slate-300`}
    >
      <div className="relative h-[550px]">
        <h1
          className={`${quattrocento.className} text-center  text-xl lg:text-3xl font-semibold mb-4`}
        >
          Ensenyants
        </h1>
        <div className="">
          {teachers.map((teacher) => (
            <MiniFitxa
              key={teacher.name}
              titol={teacher.name}
              container_classname="mb-6"
              subtitol={teacher.role}
              descripcio={teacher.bio}
              image={teacher.imageUrl}
              alt_image={`Foto de ${teacher.name}`}
              is_modal={false}
              has_border={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
