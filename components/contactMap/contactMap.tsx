//
// Component per un responsive contact form amb google maps
//
// components/ContactForm.tsx
"use client";

import { useForm, SubmitHandler, Form } from "react-hook-form";
import { sendContact } from "@/app/lib/actions";
import toast, { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CreateFormInput, FormInputType } from "./createFormInput";

interface TFormulari {
  text_nom?: string; // Actualitzat a string
  text_email?: string; // Actualitzat a string
  text_missatge?: string; // Actualitzat a string
  text_politica?: string; // Actualitzat a string
  text_enviar?: string; // Actualitzat a LocalizedText
}

interface TMessages {
  nameRequired?: string; // Actualitzat a string
  emailRequired?: string; // Actualitzat a string
  messageRequired?: string; // Actualitzat a string
  consentRequired?: string; // Actualitzat a string
  sending?: string; // Actualitzat a string
  sendSuccess?: string; // Actualitzat a string
  sendError?: string; // Actualitzat a LocalizedText
}

interface ContactMapProps {
  lang?: string;
  backgroundColor?: string;
  title?: string; // Actualitzat a string
  description?: string; // Actualitzat a LocalizedText
  formulari?: TFormulari; // Actualitzat a LocalizedText
  messages?: TMessages; // Actualitzat a LocalizedText
  te_mapa?: boolean;
  address?: string;
}

// Defineix els valors per defecte per als textos localitzats
const defaultTitle: string = "Posa't en Contacte";

const defaultDescription: string =
  "Si tens alguna pregunta, no dubtis en contactar-nos. Estarem encantats d'atendre't.";

const defaultMessages = {
  nameRequired: "El nom és obligatori.",
  emailRequired: "L'email és obligatori.",
  messageRequired: "El missatge és obligatori.",
  consentRequired: "Has d'acceptar el consentiment de dades.",
  sending: "Enviant...",
  sendSuccess: "Missatge enviat! Gràcies 🌟",
  sendError: "No s'ha pogut enviar el missatge. Intenta-ho de nou.",
  // Afegeix més idiomes si necessari
};

const defaultFormulari = {
  text_nom: "Nom complet",
  text_email: "Correu electrònic",
  text_missatge: "El teu missatge",
  text_politica:
    "Accepto la <a href='/privacy-policy' >política de privacitat</a> i consenteixo la recopilació de les meves dades a través d'aquest formulari.",
  text_enviar: "Enviar",
  // Afegeix més idiomes si necessari
};

const defaultAddress = "Lo Bram sccl";

export interface IContactForm {
  name: string;
  email: string;
  message: string;
  consent: boolean;
}

export default function ContactMap(props: ContactMapProps) {
  const {
    lang = "ca",
    backgroundColor = "#e5e7eb",
    title = defaultTitle,
    description = defaultDescription,
    messages = defaultMessages,
    formulari = defaultFormulari,
    te_mapa = true,
    address = defaultAddress,
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>();

  const onSubmit: SubmitHandler<IContactForm> = async (data) => {
    const loading_msg = messages.sending;
    const sendSuccess_msg = messages.sendSuccess;
    const sendError_msg = messages.sendError;
    await toast.promise(
      sendContact(data),
      {
        loading: loading_msg || "Enviant...",
        success: () => {
          reset(); // Això netejarà el formulari
          return <b>{sendSuccess_msg}</b>;
        },
        error: <b>{sendError_msg}</b>,
      },
      {
        duration: 4000,
        position: "bottom-center",
      }
    );
  };

  const mapa_url = `https://maps.google.com/maps?hl=${lang}&q=${address}&ie=UTF8&t=roadmap&z=12&iwloc=B&output=embed`;

  const main_div_class = cn(
    "flex flex-col md:flex-rows w-full",
    backgroundColor
  );

  const input_base =
    "w-full px-4 border rounded-lg focus:ring focus:ring-opacity-50";
  const input_class = cn(input_base, "h-9");
  const input_textarea_class = cn(input_base, "h-24");
  const error_input_class = "text-red-300 text-left pt-1";
  const error_consent_class = "text-red-300 text-left pt-1 ml-2";

  const name_input = {
    name: "name",
    requiredMessage: messages?.nameRequired,
    placeholder: formulari?.text_nom,
    errorMsg: errors.name?.message,
    className: input_class,
  };

  const email_input = {
    name: "email",
    requiredMessage: messages?.emailRequired,
    placeholder: formulari?.text_email,
    errorMsg: errors.email?.message,
    className: input_class,
  };

  const missatge_input = {
    name: "message",
    requiredMessage: messages?.messageRequired,
    placeholder: formulari?.text_missatge,
    errorMsg: errors.message?.message,
    className: input_textarea_class,
    inputType: FormInputType.textarea,
  };

  const consent_input = {
    name: "consent",
    requiredMessage: messages?.consentRequired,
    placeholder: formulari?.text_politica,
    errorMsg: errors.consent?.message,
    className: "w-4 h-4 mt-1 ",
    inputType: FormInputType.checkbox,
  };

  const inputs_col1 = [name_input, email_input];

  //console.log("inputs", inputs_col1);
  return (
    <div className={main_div_class}>
      <div className="flex flex-col md:flex-row justify-start mt-4">
        <div className="items-center md:w-1/3 text-center mx-4">
          <Toaster position="top-center" reverseOrder={false} />
          <h2 className=" text-slate-300 text-xl font-semibold text-center mb-6">
            {title}
          </h2>
          <p
            className={`text-slate-400 mb-6 lg:px-10 md:px-5 sm:px-0 py-1 text-justify  sm:text-normal text-base  `}
            dangerouslySetInnerHTML={{
              __html: description || "Descripció",
            }}
          ></p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-start items-center md:w-2/3 text-center text-sm"
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 py-4 px-2">
              {inputs_col1.map((field, index) => (
                <>
                  <CreateFormInput
                    key={field.name}
                    register={register}
                    {...field}
                  />
                  {index < inputs_col1.length - 1 && <div className="pb-4" />}
                </>
              ))}
            </div>
            <div className="md:w-1/2 py-4 px-2">
              <CreateFormInput register={register} {...missatge_input} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-stretch items-center md:items-start my-2 px-2">
            <CreateFormInput register={register} {...consent_input} />
            <Button
              type="submit"
              className="w-1/6 bg-slate-700 hover:bg-slate-700/90 mt-4 md:mt-0 "
            >
              {formulari?.text_enviar || "Enviar"}
            </Button>
          </div>
        </form>
      </div>
      {
        // Si te_mapa és true, mostra el mapa
        te_mapa && (
          <div className="h-full">
            <div
              className="flex flex-col items-stretch relative w-full px-4 pt-4 pb-0"
              style={{
                height: "25vh",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={mapa_url}
                className="border-0 rounded-sm"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )
      }
    </div>
  );
}

/*
 */
