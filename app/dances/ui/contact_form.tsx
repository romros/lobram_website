import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";

type FastContactFormProps = {
  className: string;
};

export function FastContactForm(props: FastContactFormProps) {
  let className = clsx("w-full", props.className || "");
  return (
    <div className={className}>
      <p className="text-slate-300">
        Deixa'ns el teu correu i t'informarem de la propera sessió informativa.
      </p>
      <div className="flex flex-row justify-stretch items-end py-4">
        <div className="w-4/6 items-center mr-4">
          <Input id="email" value="elteu@correu.cat" />
        </div>
        <Button className="w-1/6" type="submit">
          Enviar
        </Button>
      </div>
    </div>
  );
}
