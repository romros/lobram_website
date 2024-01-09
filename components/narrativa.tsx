import React from "react";
import { overlock, quattrocento } from "@/app/ui/fonts";
import { remark } from "remark";
import html from "remark-html";

import clsx from "clsx";
import { cn, markdown2html } from "@/lib/utils";

type LocalizedText = {
  [lang: string]: string;
};

export interface NarrativaProps {
  titol: LocalizedText;
  titol_classname?: string;
  descripcio: LocalizedText;
  descripcio_classname?: string;
  p_classname?: string;
}

export default async function Narrativa(props: NarrativaProps) {
  const lang = "ca";
  const titol_classname = cn(
    props.titol_classname ||
      ` ${quattrocento.className} text-center text-xl lg:text-3xl font-semibold mb-4`
  );

  const descripcio_classname = cn(
    "text-base  ",
    props.descripcio_classname || overlock.className
  );
  let p_classname = cn("pb-4", props.p_classname || "text-base");

  const contentHtml = await markdown2html(props.descripcio[lang], {
    p_classname: p_classname,
    classnames: [
      { tag: "h1", classname: titol_classname },
      {
        tag: "h2",
        classname: `${quattrocento.className} text-center text-lg lg:text-xl font-semibold mb-4`,
      },
    ],
  });

  return (
    <div className=" text-justify">
      <h1 className={titol_classname}>{props.titol[lang] || "Titol"}</h1>
      <div
        className={`${descripcio_classname}`}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
