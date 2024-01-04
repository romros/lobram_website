import React from "react";
import { overlock, quattrocento } from "@/app/ui/fonts";
import { remark } from "remark";
import html from "remark-html";

import clsx from "clsx";

export interface NarrativaProps {
  titol: string;
  titol_classname?: string;
  descripcio: string;
  descripcio_classname?: string;
  p_classname?: string;
}

export default async function Narrativa(props: NarrativaProps) {
  const titol_classname = clsx(
    props.titol_classname ||
      ` ${quattrocento.className} text-center text-xl lg:text-3xl font-semibold mb-4`
  );

  const descripcio_classname = clsx(
    "text-base",
    props.descripcio_classname || overlock.className
  );

  const processedContent = await remark().use(html).process(props.descripcio);
  let contentHtml = processedContent.toString();

  if (props.p_classname) {
    contentHtml = contentHtml.replace(
      /<p>/g,
      `<p class="${props.p_classname}">`
    );
  }

  contentHtml = contentHtml.replace(
    /<ul>/g,
    `<ul class="list-disc list-inside indent-2">`
  );

  return (
    <div className="relative text-justify">
      <h1 className={titol_classname}>{props.titol || "Titol"}</h1>
      <div
        className={`${descripcio_classname}`}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
