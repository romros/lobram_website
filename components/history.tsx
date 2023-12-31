"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Historia(props: {
  image: string;
  backgroundColor?: string;
  title_font?: string;
  description_font?: string;
  foto_esquerra?: boolean;
  title?: string;
  description?: string;
  text_button?: string;
  background_color_button?: string;
  text_color_button?: string;
  link_button?: string;
  extra_className?: string;
}) {
  const [hover, setHover] = useState(false);

  let backgroundColor = props.backgroundColor || "";
  let title_font = props.title_font || "";
  let description_font = props.description_font || "";
  let reverse = props.foto_esquerra == undefined ? false : props.foto_esquerra;
  let extra_className =
    props.extra_className ||
    clsx(
      !props.text_color_button ? "text-white" : "",
      !props.background_color_button ? "bg-blue-700" : ""
    );

  const flexOrderClass = reverse ? "md:flex-row-reverse" : "md:flex-row";

  let buttonStyle: any = {};
  let buttonStyleHover: any = {};
  if (props.background_color_button) {
    buttonStyle.backgroundColor = props.background_color_button;
    buttonStyleHover.filter = "brightness(80%)";
    buttonStyleHover.backgroundColor = props.background_color_button;
  }
  if (props.text_color_button) {
    buttonStyle.color = props.text_color_button;
  }
  console.log("buttonStyle", buttonStyle);
  console.log("buttonStyleHover", buttonStyleHover);
  console.log("hover", hover ? "true" : "false");

  const buttonClass = clsx(
    "inline-block font-quattrocento px-6 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50",
    "hover:bg-opacity-80",
    "hover:shadow-lg",
    extra_className
  );
  return (
    <div
      className={`flex flex-col ${flexOrderClass}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Columna de Text */}
      <div className="flex flex-col justify-center items-center md:w-1/2 p-8 text-center">
        <h1 className={`${title_font} text-4xl font-semibold mb-4`}>
          {props.title || "Qui som?"}
        </h1>
        <p
          className={`${description_font} mb-6 lg:px-20 md:px-10 sm:px-0 py-8 text-lg sm:text-normal`}
          dangerouslySetInnerHTML={{
            __html: props.description || "Descripció",
          }}
        >
          {/* Contingut eliminat ja que està sent inserit mitjançant dangerouslySetInnerHTML */}
        </p>

        {/* Botó que porta a les activitats . nomes mostra link si existeix link_button*/}
        {props.link_button && (
          <Link
            href={props.link_button}
            className={buttonClass}
            style={hover ? buttonStyleHover : buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {props.text_button || "Veure activitats"}
          </Link>
        )}
      </div>

      {/* Columna de la Imatge */}
      <div className="md:w-1/2 ">
        <div
          className="flex flex-col items-stretch relative w-full"
          style={{
            height: "60vh",
            minHeight: "100%",
          }}
        >
          <Image
            className="object-cover"
            src={props.image}
            alt="props.title"
            sizes="100vw"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
