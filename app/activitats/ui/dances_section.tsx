import React from "react";
import { overlock, quattrocento } from "@/app/ui/fonts";
import Image from "next/image";

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

export interface DancesSectionProps {}

export default function DancesSection(props: DancesSectionProps) {
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
            <div key={teacher.name} className="flex items-start mb-6">
              <img
                src={teacher.imageUrl}
                alt={`Foto de ${teacher.name}`}
                className="flex-none w-24 h-24 mr-4 rounded-lg" // La classe rounded-lg dóna els costats lleugerament arrodonits.
                // Assegura't que les imatges tenen les dimensions correctes i estan optimitzades
              />
              <div className="flex-grow">
                <h3 className="text-lg text-slate-200 font-semibold">
                  {teacher.name}
                </h3>
                <p className="text-sm text-slate-400">{teacher.role}</p>
                <p className="text-slate-300 text-sm">{teacher.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
