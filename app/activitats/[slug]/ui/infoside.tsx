import Image from "next/image";
import React from "react";

export interface InfoGeneralProps {
  title: string;
  subtitle: string;
  logoImageUrl: string; // URL de la imatge del logo
  alt_logo: string; // Text alternatiu de la imatge del logo
}

const InfoGeneral: React.FC<InfoGeneralProps> = ({
  title,
  subtitle,
  logoImageUrl,
  alt_logo,
}) => {
  return (
    <div className="flex flex-col items-center pt-4">
      {logoImageUrl && false && (
        <div className="flex justify-center mb-4  w-25">
          <Image
            src={logoImageUrl}
            alt={alt_logo}
            width={150} // Augmentat la mida per a major visibilitat
            height={150}
            className="rounded-full"
          />
        </div>
      )}
      {/* Línia divisòria */}
      <h1 className="text-lg font-bold text-gray-800">{title}</h1>
      <p className="text-sm text-gray-600">{subtitle}</p>
      <div className="border-t border-gray-300 w-full mt-2 mb-4"></div>{" "}
    </div>
  );
};

export default InfoGeneral;
