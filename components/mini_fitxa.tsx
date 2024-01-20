import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { LocalizedText } from "@/app/lib/definitions";
import { cn, markdown2html } from "@/lib/utils";
import MyDialog from "@/components/dialog";
import Image from "next/image";

export interface MiniFitxaProps {
  lang?: string;
  titol: LocalizedText;
  subtitol: LocalizedText;
  descripcio: LocalizedText;
  image?: string;
  alt_image?: LocalizedText;
  image_width?: number;
  image_height?: number;
  is_modal?: boolean;
  background_modal?: string;
  has_border?: boolean;
  border_color?: string;
  classname?: string;
  titol_classname?: string;
  subtitol_classname?: string;
  descripcio_classname?: string;
  image_classname?: string;
  modal_classname?: string;
}

const defaultTitol: LocalizedText = {
  ca: "Títol",
};
const defaultSubtitol: LocalizedText = {
  ca: "Subtítol",
};
const defaultDescripcio: LocalizedText = {
  ca: "Descripció",
};
const defaultAltImage: LocalizedText = {
  ca: "Foto",
};

export default async function MiniFitxa(props: MiniFitxaProps) {
  const lang: string = "ca";
  const {
    lang: string = "ca",
    is_modal = false,
    border_color = "",
    has_border = false,

    titol = defaultTitol,
    subtitol = defaultSubtitol,
    descripcio = defaultDescripcio,
    image = null,
    alt_image = defaultAltImage,
    image_width = 800,
    image_height = 800,
  } = props;

  const titol_classname = cn(
    "text-lg font-semibold",
    props.titol_classname || "text-slate-200"
  );
  const subtitol_classname = cn(
    "text-sm",
    props.subtitol_classname || "text-slate-400"
  );
  const descripcio_classname = cn(
    "text-sm pb-4",
    props.descripcio_classname || "text-slate-300"
  );
  const classname = cn("flex items-start pb-2", props.classname);
  const modal_classname = cn("sm:max-w-[425px]", props.modal_classname);
  const image_classname = cn(
    "flex-none w-24 h-24 mr-4 rounded-lg",
    props.image_classname || ""
  );

  const button_image_classname = cn(
    image_classname,
    has_border && border_color ? `border-${border_color} border-2` : "",
    has_border && !border_color ? "border-blue-700 border-2" : ""
  );

  let html_text = await markdown2html(descripcio?.[lang], {
    p_classname: descripcio_classname,
  });

  return (
    <div key={titol[lang]} className={classname}>
      {image && is_modal && add_dialog()}

      {image && !is_modal && (
        <Image
          src={image}
          alt={alt_image?.[lang] || `Foto de ${titol?.lang}`}
          width={image_width || 800}
          height={image_height || 800}
          className={image_classname}
        />
      )}
      <div className="flex-grow">
        <h3 className={titol_classname}>{titol[lang]}</h3>
        <p className={subtitol_classname}>{subtitol[lang]}</p>
        <div
          className={descripcio_classname}
          dangerouslySetInnerHTML={{
            __html: html_text,
          }}
        />
      </div>
    </div>
  );

  function add_dialog() {
    return (
      <Dialog>
        <DialogTrigger className="cursor-pointer">
          <div className={button_image_classname}>
            <Image
              src={image || ""}
              alt={alt_image?.[lang] || `Foto de ${titol?.lang}`}
              width={image_width || 800}
              height={image_height || 800}
            />
          </div>
        </DialogTrigger>
        <DialogContent className={modal_classname}>
          <div className="grid gap-4 py-4">
            <Image
              src={image || ""}
              alt={alt_image?.[lang] || `Foto de ${titol?.lang}`}
              width={image_width || 800}
              height={image_height || 800}
              layout="responsive"
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
