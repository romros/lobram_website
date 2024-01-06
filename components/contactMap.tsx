//
// Component per un responsive contact form amb google maps
//
// components/ContactForm.tsx
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { IContactForm, sendContact } from "@/app/lib/actions";
import toast, { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";

interface ContactMapProps {
  backgroundColor?: string;
  title?: string;
  description?: string;
  formulari?: {
    text_nom?: string;
    text_email?: string;
    text_missatge?: string;
    text_politica?: string;
    text_enviar?: string;
  };
  messages?: {
    nameRequired: string;
    emailRequired: string;
    messageRequired: string;
    consentRequired: string;
    sending: string;
    sendSuccess: string;
    sendError: string;
  };
  mapa?: {
    idioma: string;
    lloc: string;
  };
}

export default function ContactMap(props: ContactMapProps) {
  const {
    backgroundColor = "#e5e7eb",
    title = "Posa't en Contacte",
    description = "Si tens alguna pregunta, no dubtis en contactar-nos. Estarem encantats d'atendre't.",
    messages = {
      nameRequired: "El nom és obligatori.",
      emailRequired: "L'email és obligatori.",
      messageRequired: "El missatge és obligatori.",
      consentRequired: "Has d'acceptar el consentiment de dades.",
      sending: "Enviant...",
      sendSuccess: "Missatge enviat! Gràcies 🌟",
      sendError: "No s'ha pogut enviar el missatge. Intenta-ho de nou.",
    },
    formulari = {
      text_nom: "Nom complet",
      text_email: "Correu electrònic",
      text_missatge: "El teu missatge",
      text_politica:
        "Accepto la <a href='/privacy-policy' >política de privacitat</a> i consenteixo la recopilació de les meves dades a través d'aquest formulari.",
      text_enviar: "Enviar",
    },
    mapa = {
      idioma: "ca",
      lloc: "Lo Bram sccl",
    },
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>();

  const onSubmit: SubmitHandler<IContactForm> = async (data) => {
    await toast.promise(
      sendContact(data),
      {
        loading: messages.sending,
        success: () => {
          reset(); // Això netejarà el formulari
          return <b>{messages.sendSuccess}</b>;
        },
        error: <b>{messages.sendError}</b>,
      },
      {
        duration: 4000,
        position: "bottom-center",
      }
    );
  };

  const mapa_url = `https://maps.google.com/maps?hl=${mapa.idioma}&q=${mapa.lloc}&ie=UTF8&t=roadmap&z=12&iwloc=B&output=embed`;

  const main_div_class = cn(
    "flex flex-col md:flex-rows w-full",
    backgroundColor
  );

  return (
    <div className={main_div_class}>
      <div className="flex flex-col md:flex-row justify-start mt-4">
        <div className="items-center md:w-1/3 text-center">
          <Toaster position="top-center" reverseOrder={false} />
          <h2 className=" text-slate-300 text-xl font-semibold text-center mb-6">
            {title || "Posa't en Contacte"}
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
          className="flex flex-col justify-start items-center md:w-2/3 text-center"
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 p-4">
              <div className="pb-4">
                <input
                  type="text"
                  {...register("name", { required: messages.nameRequired })}
                  placeholder={formulari.text_nom}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register("email", { required: messages.emailRequired })}
                  placeholder={formulari.text_email}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <textarea
                {...register("message", {
                  required: messages.messageRequired,
                })}
                placeholder={formulari.text_missatge}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                rows={4}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-stretch">
            <div className="flex items-start w-4/6">
              <input
                type="checkbox"
                {...register("consent", {
                  required: messages.consentRequired,
                })}
                className="w-4 h-4 mt-1"
              />
              <label className="ml-2 text-xs text-left text-slate-300">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      formulari.text_politica ||
                      "Accepto la política de privacitat i consenteixo la recopilació de les meves dades a través d'aquest formulari.",
                  }}
                ></span>
              </label>
              {errors.consent && (
                <p className="text-red-500">{errors.consent.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-1/6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {formulari.text_enviar}
            </button>
          </div>
        </form>
      </div>
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
    </div>
  );
}

/*
 */
