import { cn, markdown2html } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type LocalizedText = {
  [lang: string]: string;
};

type HistoriaProps = {
  lang?: string;
  image: string;
  backgroundColor?: string;
  title_font?: string;
  description_font?: string;
  foto_esquerra?: boolean;
  title?: LocalizedText;
  description?: LocalizedText;
  text_button?: LocalizedText;
  background_color_button?: string;
  text_color_button?: string;
  link_button?: string;
  extra_className?: string;
  is_markdown?: boolean;
};

export default async function Historia(props: HistoriaProps) {
  let current_lang = props.lang || "ca";
  let backgroundColor = props.backgroundColor || "";
  let title_font = props.title_font || "";
  let description_font = props.description_font || "";
  let reverse = props.foto_esquerra == undefined ? false : props.foto_esquerra;
  let extra_className = props.extra_className;
  let is_markdown = props.is_markdown == undefined ? false : props.is_markdown;

  const flexOrderClass = reverse ? "md:flex-row-reverse" : "md:flex-row";

  let buttonStyle: any = {};
  if (props.background_color_button) {
    buttonStyle.backgroundColor =
      props.background_color_button || "bg-blue-900";
  }
  if (props.text_color_button) {
    buttonStyle.color = props.text_color_button;
  }

  const buttonClass = clsx(
    "inline-block font-quattrocento px-6 py-2 rounded-md",
    buttonStyle,
    extra_className
  );

  let html_text = props.description?.[current_lang] || "Descripció";

  if (is_markdown) {
    // Crida la funció markdown2html amb await
    html_text = await markdown2html(props.description?.[current_lang] || "", {
      p_classname: "pb-4",
    });
  }

  return (
    <div
      className={`flex flex-col ${flexOrderClass}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Columna de Text */}
      <div className="flex flex-col justify-center items-center md:w-1/2 p-8 text-justify">
        <h1 className={`${title_font} text-4xl font-semibold mb-4`}>
          {props.title?.[current_lang] || "Qui som?"}
        </h1>
        <div className="mb-6 lg:px-20 md:px-10 sm:px-0 py-8 text-lg sm:text-normal">
          <p
            className={`${description_font}`}
            dangerouslySetInnerHTML={{
              __html: html_text,
            }}
          />
        </div>

        {/* Botó que porta a les activitats . nomes mostra link si existeix link_button*/}
        {props.link_button && (
          <Link
            href={props.link_button}
            className={cn(buttonClass, buttonVariants({ variant: "default" }))}
          >
            {props.text_button?.[current_lang] || "Veure activitats"}
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
            style={{
              zIndex: -1,
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
            }}
            fill
          />
        </div>
      </div>
    </div>
  );
}
