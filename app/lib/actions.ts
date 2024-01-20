"use server";

import { z } from "zod";
import validator from "validator";
import { Resend } from "resend";
import { IContactForm } from "components/contactMap/contactMap";

// This is temporary
export type State = {
  errors?: {
    message?: string[];
  };
  message?: string | null;
};

const resend = new Resend(process.env.NEXT_RESEND_API_KEY!);

/* enviar dades del formulari */
export async function sendContact(data: IContactForm): Promise<State> {
  if (data.consent) {
    const { data: response, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "New contact form message",
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      // add more properties as needed
    });
    if (error) {
      return {
        errors: {
          message: ["Could not send message.", error.message, error.name],
        },
        message: "Could not send message.",
      };
    }
  }
  return { message: "Message sent." };
}
