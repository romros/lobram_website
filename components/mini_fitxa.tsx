import { LocalizedText } from "@/app/lib/definitions";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn, markdown2html } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";

export interface MiniFitxaProps {
  lang?: string;
  container_classname?: string;
  titol: LocalizedText;
  color_titol?: string;
  subtitol: LocalizedText;
  color_subtitol?: string;
  descripcio: LocalizedText;
  color_descripcio?: string;
  image?: string;
  alt_image?: LocalizedText;
  image_width?: number;
  image_height?: number;
  is_modal?: boolean;
  background_modal?: string;
  border_color?: string;
  has_border?: boolean;
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
  const {
    lang = "ca",
    is_modal = false,
    border_color = "",
    has_border = false,
    color_titol = "text-slate-200",
    color_subtitol = "text-slate-400",
    color_descripcio = "text-slate-300",
    background_modal = "bg-blue-100",
    container_classname = "",
    titol = defaultTitol,
    subtitol = defaultSubtitol,
    descripcio = defaultDescripcio,
    image = null,
    alt_image = defaultAltImage,
    image_width = 800,
    image_height = 800,
  } = props;

  const updatedContainerClassname = cn("flex items-start", container_classname);
  const button_image_classname = cn(
    "flex-none w-24 h-24 mr-4 rounded-lg",
    has_border && border_color ? `border-${border_color} border-2` : "",
    has_border && !border_color ? "border-blue-700 border-2" : ""
  );
  const titol_classname = cn(color_titol, "text-lg font-semibold");
  const subtitol_classname = cn(color_subtitol, "text-sm");
  const descripcio_classname = cn(color_descripcio, "text-sm");
  const background_modal_classname = cn("sm:max-w-[425px]", background_modal);

  let html_text = await markdown2html(descripcio?.[lang], {
    p_classname: cn("pb-4 text-sm", color_descripcio),
  });

  return (
    <div key={titol[lang]} className={updatedContainerClassname}>
      {image && is_modal && (
        <Dialog>
          {/* un classname que quan passi el ratoli sorti com clickable */}
          <DialogTrigger asChild className="cursor-pointer">
            <Image
              src={image}
              alt={alt_image?.[lang] || `Foto de ${titol?.lang}`}
              width={image_width || 800}
              height={image_height || 800}
              className={button_image_classname}
            />
          </DialogTrigger>
          <DialogContent className={background_modal_classname}>
            <div className="grid gap-4 py-4">
              <Image
                src={image}
                alt={alt_image?.[lang] || `Foto de ${titol?.lang}`}
                width={image_width || 800}
                height={image_height || 800}
                layout="responsive"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
      {image && !is_modal && (
        <Image
          src={image}
          alt={alt_image?.[lang] || `Foto de ${titol?.lang}`}
          width={image_width || 800}
          height={image_height || 800}
          className={button_image_classname}
        />
      )}

      <div className="flex-grow">
        <h3 className={titol_classname}>{titol[lang]}</h3>
        <p className={subtitol_classname}>{subtitol[lang]}</p>
        <p
          className={descripcio_classname}
          dangerouslySetInnerHTML={{
            __html: html_text,
          }}
        ></p>
      </div>
    </div>
  );
}
