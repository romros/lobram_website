import { overlock, quattrocento } from "@/app/ui/fonts";
import { FastContactForm } from "./ui/contact_form";
import Narrativa from "@/components/narrativa";
import MiniFitxa from "@/components/mini_fitxa";

const teachers = [
  {
    name: "Madur Rottolo",
    role: "Mestre Principal",
    bio: "Madur és el cor i l'ànima de les danses sagrades. Amb una profunda comprensió del Quart Camí, guia els estudiants en el seu viatge interior.",
    imageUrl: "/madur.jpg", // Substitueix amb la URL real de la imatge
  },
  {
    name: "Judit",
    role: "Ensenyant de Dansa",
    bio: "Judit, amb la seva gràcia i saviesa, assisteix en l'ensenyament de les danses, ajudant els estudiants a connectar amb el moviment i la meditació.",
    imageUrl: "/judit.jpg",
  },
  {
    name: "Isaac",
    role: "Ensenyant de Dansa",
    bio: "Isaac aporta una energia vibrant i una passió per l'ensenyament, ajudant els estudiants a explorar la profunditat de les danses sagrades.",
    imageUrl: "/isaac.jpg",
  },
];

export default function DancesPage() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full ">
        <div className="w-full lg:w-1/3 bg-[#7a87a1] p-4">
          <div
            className={`text-xl  flex flex-col justify-center items-center my-8 text-slate-950`}
          >
            <Narrativa
              titol="Les Danses Sagrades de Gurdjieff"
              p_classname="mb-2"
              descripcio={`Les danses sagrades de Gurdjieff són una forma poderosa de treball sobre un mateix. A través del moviment conscient i la música, els participants exploren els ensenyaments del Quart Camí, connectant amb el seu cos, ment i esperit. Les danses són una forma de meditació en moviment, ajudant als estudiants a desenvolupar la presència i l'atenció.`}
            />
            {/* Aquí pots afegir més components Narrativa amb informació específica del curs */}
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center lg:p-4 bg-gradient-to-b lg:bg-gradient-to-r from-[#7a87a1] to-[#151f2f]">
          {/* Pots substituir aquesta imatge amb alguna rellevant per a les danses sagrades */}
          <img
            src="/yo_soy_eneagram.jpg"
            alt="Símbol de les Danses"
            className="rounded-full max-h-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-full"
          />
        </div>
        <div className="w-full lg:w-1/3 bg-[#151f2f] p-4">
          <div
            className={`${overlock.className} text-xl  flex flex-col justify-center items-center my-8 text-slate-300`}
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
          <FastContactForm className="pt-6" />
        </div>
      </div>
    </main>
  );
}
