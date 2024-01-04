import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import clsx from "clsx";
import Image from "next/image";

export interface MiniFitxaProps {
  container_classname?: string;
  titol: string;
  color_titol?: string;
  subtitol: string;
  color_subtitol?: string;
  descripcio: string;
  color_descripcio?: string;
  image?: string;
  alt_image?: string;
  image_width?: number;
  image_height?: number;
  is_modal?: boolean;
  background_modal?: string;
  border_color?: string;
  has_border?: boolean;
}

export default function MiniFitxa(props: MiniFitxaProps) {
  const has_border = props.has_border || false;

  const container_classname = clsx(
    "flex items-start",
    props.container_classname || ""
  );

  const button_image_classname = clsx(
    "flex-none w-24 h-24 mr-4 rounded-lg",
    has_border && props.border_color
      ? `border-${props.border_color} border-2`
      : "",
    has_border && !props.border_color ? "border-blue-700 border-2" : ""
  );
  const titol_classname = clsx(
    props.color_titol || "text-slate-200",
    "text-lg font-semibold"
  );
  const subtitol_classname = clsx(
    props.color_subtitol || "text-slate-400",
    "text-sm"
  );
  const descripcio_classname = clsx(
    props.color_descripcio || "text-slate-300",
    "text-sm"
  );
  const background_modal_classname = clsx(
    "sm:max-w-[425px]",
    props.background_modal || "bg-blue-100"
  );

  return (
    <div key={props.titol} className={container_classname}>
      {props.image && props.is_modal && (
        <Dialog>
          <DialogTrigger asChild>
            <Image
              src={props.image}
              alt={props.alt_image || `Foto de ${props.titol}`}
              width={props.image_width || 800}
              height={props.image_height || 800}
              className={button_image_classname}
            />
          </DialogTrigger>
          <DialogContent className={background_modal_classname}>
            <div className="grid gap-4 py-4">
              <Image
                src={props.image}
                alt={props.alt_image || `Foto de ${props.titol}`}
                width={props.image_width || 800}
                height={props.image_height || 800}
                layout="responsive"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
      {props.image && !props.is_modal && (
        <Image
          src={props.image}
          alt={props.alt_image || `Foto de ${props.titol}`}
          width={props.image_width || 800}
          height={props.image_height || 800}
          className={button_image_classname}
        />
      )}

      <div className="flex-grow">
        <h3 className={titol_classname}>{props.titol}</h3>
        <p className={subtitol_classname}>{props.subtitol}</p>
        <p
          className={descripcio_classname}
          dangerouslySetInnerHTML={{
            __html: props.descripcio,
          }}
        ></p>
      </div>
    </div>
  );
}
