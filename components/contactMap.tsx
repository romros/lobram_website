//
// Component per un responsive contact form amb google maps
//
// components/ContactForm.tsx
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { IContactForm, sendContact } from "@/app/lib/actions";
import toast, { Toaster } from "react-hot-toast";

export default function ContactMap(props: {
  backgroundColor?: string;
  title?: string;
  description?: string;
}) {
  let backgroundColor = props.backgroundColor || "";

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
        loading: "Enviant...",
        success: () => {
          reset(); // Això netejarà el formulari
          return <b>Missatge enviat! Gràcies 🌟</b>;
        },
        error: <b>No s'ha pogut enviar el missatge. Intenta-ho de nou.</b>,
      },
      {
        duration: 4000,
      }
    );
  };

  return (
    <div
      className="flex flex-col md:flex-row-reverse  w-full"
      style={{ backgroundColor: backgroundColor }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      {/* Columna de Text */}
      <div className="flex flex-col justify-start mt-4 items-center md:w-2/3 text-center">
        <div className="flex flex-col md:flex-row w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg mx-auto my-10 ">
            <h2 className="text-2xl font-semibold text-center mb-6">
              {props.title || "Posa't en Contacte"}
            </h2>
            <p
              className={`mb-6 lg:px-10 md:px-5 sm:px-0 py-1  sm:text-normal  text-lg  `}
              dangerouslySetInnerHTML={{
                __html: props.description || "Descripció",
              }}
            ></p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  {...register("name", { required: "El nom és obligatori." })}
                  placeholder="Nom complet"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register("email", { required: "L'email és obligatori." })}
                  placeholder="Correu electrònic"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message", {
                    required: "El missatge és obligatori.",
                  })}
                  placeholder="El teu missatge"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50"
                  rows={4}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  {...register("consent", {
                    required: "Has d'acceptar el consentiment de dades.",
                  })}
                  className="w-4 h-4 mt-1"
                />
                <label className="ml-2 text-sm">
                  Accepto la{" "}
                  <a href="/privacy-policy" className="text-blue-600 underline">
                    política de privacitat
                  </a>{" "}
                  i consent la recopilació de les meves dades a través d'aquest
                  formulari.
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500">{errors.consent.message}</p>
              )}

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 ">
        <div
          className="flex flex-col items-stretch relative w-full"
          style={{
            height: "60vh",
            minHeight: "100%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?hl=ca&q=Lo Bram sccl&ie=UTF8&t=roadmap&z=12&iwloc=B&output=embed"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
