import Image from "next/image";
import clsx from "clsx";
import { LocalizedText } from "@/app/lib/definitions";

interface HeroProps {
  lang?: string;
  title: LocalizedText;
  height?: string;
  subtitle?: LocalizedText;
  backgroundImage: string;
  logo?: string;
}

export default function Hero({
  lang = "ca",
  title,
  height = "h-[85vh]",
  subtitle,
  backgroundImage,
  logo,
}: HeroProps) {
  const backgroundClassName = clsx(
    "relative w-full flex items-center justify-center bg-cover bg-center bg-no-repeat",
    height
  );

  const logoStyles = {
    filter: "saturate(1.5) brightness(1.2)",
    boxShadow: "0 0 0 rgba(0, 255, 0, 0.5)",
  };

  return (
    <div className={`relative ${backgroundClassName}`}>
      <Image src={backgroundImage} alt="Background" fill style={{ objectFit: "cover" }} className="z-0" />
      <div className="bg-black bg-opacity-10 absolute top-0 right-0 bottom-0 left-0"></div>
      <div className="z-10 text-white text-center">
        <h1 className="antialiased self-stretch text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold" style={{ fontWeight: 800 }}>
          {title[lang] || "Títol"}
        </h1>
        {subtitle && <p className="text-xl sm:text-xl md:text-2xl lg:text-5xl">{subtitle[lang] || "Subtítol"}</p>}
        {logo && (
          <div className="mt-4 flex justify-center items-center">
            <div className="backdrop-blur-sm rounded-full p-2 bg-white/30">
              <Image src={logo} alt="Logo de Lo Bram" width={120} height={120} className="relative" style={logoStyles} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
