import { overlock, quattrocento } from "@/app/ui/fonts";
import Image from "next/image";

export default function Hero(props: {
  title: string;
  subtitle: string;
  backgroundImage: string;
  logo?: string;
}) {
  // Ajusta aquestes dimensions al tamany que vulguis per al teu logo
  const logoWidth = 120;
  const logoHeight = 120;
  return (
    <div
      className="relative w-full h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${props.backgroundImage}')` }}
    >
      <div className="bg-black bg-opacity-10 absolute top-0 right-0 bottom-0 left-0"></div>
      <div className="z-10 text-white text-center">
        {/* Títol amb mida adaptable */}
        <h1
          className={`${quattrocento.className} antialiased self-stretch text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold`}
          style={{ fontWeight: 800 }}
        >
          {props.title}
        </h1>

        {/* Subtítol amb mida adaptable */}
        <p
          className={`${overlock.className} text-xl sm:text-xl md:text-2xl lg:text-5xl`}
        >
          {props.subtitle}
        </p>

        {/* Logo si hi ha logo*/}
        {props.logo && (
          <div className="mt-4 flex justify-center items-center">
            <div className="backdrop-blur-sm rounded-full p-2 bg-white/30">
              <Image
                src={props.logo} // Ruta de la imatge
                alt="Logo de Lo Bram"
                width={logoWidth} // Mida del logo
                height={logoHeight} // Mida del logo
                className="relative" // Assegura't que la imatge està al mig del fons desenfocat
                style={{
                  filter: "saturate(1.5) brightness(1.2)",
                  boxShadow: "0 0 0 rgba(0, 255, 0, 0.5)",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
