//
// Component per un responsive contact form amb google maps
//
// components/ContactForm.tsx
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { IContactForm, sendContact } from "@/app/lib/actions";
import toast, { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LocalizedText } from "@/app/lib/definitions";

interface ContactMapProps {
  lang?: string;
  backgroundColor?: string;
  title?: LocalizedText; // Actualitzat a LocalizedText
  description?: LocalizedText; // Actualitzat a LocalizedText
  formulari?: {
    text_nom?: LocalizedText; // Actualitzat a LocalizedText
    text_email?: LocalizedText; // Actualitzat a LocalizedText
    text_missatge?: LocalizedText; // Actualitzat a LocalizedText
    text_politica?: LocalizedText; // Actualitzat a LocalizedText
    text_enviar?: LocalizedText; // Actualitzat a LocalizedText
  };
  messages?: {
    nameRequired: LocalizedText; // Actualitzat a LocalizedText
    emailRequired: LocalizedText; // Actualitzat a LocalizedText
    messageRequired: LocalizedText; // Actualitzat a LocalizedText
    consentRequired: LocalizedText; // Actualitzat a LocalizedText
    sending: LocalizedText; // Actualitzat a LocalizedText
    sendSuccess: LocalizedText; // Actualitzat a LocalizedText
    sendError: LocalizedText; // Actualitzat a LocalizedText
  };
  te_mapa?: boolean;
  address?: string;
}

// Defineix els valors per defecte per als textos localitzats
const defaultTitle: LocalizedText = {
  ca: "Posa't en Contacte",
  // Afegeix més idiomes si necessari
};

const defaultDescription: LocalizedText = {
  ca: "Si tens alguna pregunta, no dubtis en contactar-nos. Estarem encantats d'atendre't.",
  // Afegeix més idiomes si necessari
};

const defaultMessages = {
  nameRequired: { ca: "El nom és obligatori." },
  emailRequired: { ca: "L'email és obligatori." },
  messageRequired: { ca: "El missatge és obligatori." },
  consentRequired: { ca: "Has d'acceptar el consentiment de dades." },
  sending: { ca: "Enviant..." },
  sendSuccess: { ca: "Missatge enviat! Gràcies 🌟" },
  sendError: { ca: "No s'ha pogut enviar el missatge. Intenta-ho de nou." },
  // Afegeix més idiomes si necessari
};

const defaultFormulari = {
  text_nom: { ca: "Nom complet" },
  text_email: { ca: "Correu electrònic" },
  text_missatge: { ca: "El teu missatge" },
  text_politica: {
    ca: "Accepto la <a href='/privacy-policy' >política de privacitat</a> i consenteixo la recopilació de les meves dades a través d'aquest formulari.",
  },
  text_enviar: { ca: "Enviar" },
  // Afegeix més idiomes si necessari
};

const defaultAddress = "Lo Bram sccl";

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
    const loading_msg = (messages.sending as { [key: string]: string })[lang];
    const sendSuccess_msg = (messages.sendSuccess as { [key: string]: string })[
      lang
    ];
    const sendError_msg = (messages.sendError as { [key: string]: string })[
      lang
    ];
    await toast.promise(
      sendContact(data),
      {
        loading: loading_msg,
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

  const messages_nameRequired_lang = (
    messages.nameRequired as { [key: string]: string }
  )[lang];
  const formulari_text_nom = (formulari.text_nom as { [key: string]: string })[
    lang
  ];
  const messages_emailRequired = (
    messages.emailRequired as { [key: string]: string }
  )[lang];
  const formulari_text_email = (
    formulari.text_email as { [key: string]: string }
  )[lang];
  const messages_messageRequired = (
    messages.messageRequired as { [key: string]: string }
  )[lang];
  const messages_consentRequired = (
    messages.consentRequired as { [key: string]: string }
  )[lang];
  const formulari_text_missatge = (
    formulari.text_missatge as { [key: string]: string }
  )[lang];
  const formulari_text_politica = (
    formulari.text_politica as { [key: string]: string }
  )[lang];
  const formulari_text_enviar = (
    formulari.text_enviar as { [key: string]: string }
  )[lang];

  return (
    <div className={main_div_class}>
      <div className="flex flex-col md:flex-row justify-start mt-4">
        <div className="items-center md:w-1/3 text-center mx-4">
          <Toaster position="top-center" reverseOrder={false} />
          <h2 className=" text-slate-300 text-xl font-semibold text-center mb-6">
            {title[lang]}
          </h2>
          <p
            className={`text-slate-400 mb-6 lg:px-10 md:px-5 sm:px-0 py-1 text-justify  sm:text-normal text-base  `}
            dangerouslySetInnerHTML={{
              __html: description[lang] || "Descripció",
            }}
          ></p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-start items-center md:w-2/3 text-center text-sm"
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 p-4">
              <div className="pb-4">
                <input
                  type="text"
                  {...register("name", {
                    required: messages_nameRequired_lang,
                  })}
                  placeholder={formulari_text_nom}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                />
                {errors.name && (
                  <p className="text-red-300 text-left pt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register("email", { required: messages_emailRequired })}
                  placeholder={formulari_text_email}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                />
                {errors.email && (
                  <p className="text-red-300 text-left pt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <textarea
                {...register("message", {
                  required: messages_messageRequired,
                })}
                placeholder={formulari_text_missatge}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                rows={4}
              ></textarea>
              {errors.message && (
                <p className="text-red-300 text-left pt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-stretch items-center md:items-start mx-4">
            <div className="flex flex-col  ">
              <div className="block md:text-nowrap pr-4 items-start">
                <input
                  type="checkbox"
                  {...register("consent", {
                    required: messages_consentRequired,
                  })}
                  className="w-4 h-4 mt-1 "
                />
                <label className="ml-2 text-xs text-left text-slate-300 ">
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        formulari_text_politica ||
                        "Accepto la política de privacitat i consenteixo la recopilació de les meves dades a través d'aquest formulari.",
                    }}
                  ></span>
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-300 text-left pt-1">
                  {errors.consent.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-1/6 bg-slate-700 hover:bg-slate-700/90 mt-4 md:mt-0 "
            >
              {formulari_text_enviar}
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
