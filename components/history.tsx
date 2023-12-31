import clsx from "clsx";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";

export default function Historia(props: {
  image: string;
  backgroundColor?: string;
  title_font?: string;
  description_font?: string;
  foto_esquerra?: boolean;
  title?: string;
  description?: string;
  text_button?: string;
  backgroud_color_button?: string;
  text_color_button?: string;
  link_button?: string;
}) {
  let backgroundColor = props.backgroundColor || "";
  let title_font = props.title_font || "";
  let description_font = props.description_font || "";
  let reverse = props.foto_esquerra == undefined ? false : props.foto_esquerra;
  let backgroud_color_button = props.backgroud_color_button || "blue-700";
  let text_color_button = props.text_color_button || "white";

  const flexOrderClass = reverse ? "md:flex-row-reverse" : "md:flex-row";

  const buttonClass = clsx(
    "inline-block font-quattrocento px-6 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50",
    backgroud_color_button.startsWith("#")
      ? "bg-[" + `${backgroud_color_button}` + "]"
      : "bg-" + `${backgroud_color_button}`,
    text_color_button.startsWith("#")
      ? "text-[" + `${text_color_button}` + "]"
      : "text-" + `${text_color_button}`,
    "hover:bg-opacity-80",
    "hover:shadow-lg" // Afegeix una ombra més gran al fer hover
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
          // oldria que fos px-20 en pantalla gran  i en mkobils px-0
          className={`${description_font} mb-6 lg:px-20 md:px-10 sm:px-0 py-8 text-lg sm:text-normal`}
        >
          {props.description || "Descripció "}
        </p>
        {/* Botó que porta a les activitats . nomes mostra link si existeix link_button*/}
        {props.link_button && (
          <Link
            href={props.link_button}
            className={buttonClass}
            style={{
              backgroundColor: backgroud_color_button,
              color: text_color_button,
            }}
          >
            {props.text_button || "Veure activitats"}
          </Link>
        )}
      </div>

      {/* Columna de la Imatge */}
      <div className="md:w-1/2">
        <Image
          src={props.image}
          alt="props.title"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={500} // Aquests valors haurien de coincidir amb les dimensions reals de la teva imatge
        />
      </div>
    </div>
  );
}
