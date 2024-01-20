import React from "react";
import { UseFormRegister } from "react-hook-form";

//type InputType = "input" | "textarea" | "checkbox";

export enum FormInputType {
  input = "input",
  textarea = "textarea",
  checkbox = "checkbox",
}

interface FormInputProps {
  name: string;
  register: UseFormRegister<any>;
  requiredMessage?: string;
  placeholder?: string;
  errorMsg?: string;
  inputType?: FormInputType;
  className?: string;
  errorClassName?: string;
}

export const CreateFormInput = ({
  name,
  register,
  requiredMessage = "El camp és obligatori.",
  placeholder = "Accepto la política de privacitat i consenteixo la recopilació de les meves dades a través d'aquest formulari.",
  errorMsg,
  inputType = FormInputType.input,
  className = "w-full px-4 py-2 border rounded-lg focus:ring focus:ring-opacity-50",
  errorClassName = "text-red-300 text-left pt-1",
}: FormInputProps) => {
  const commonInputProps = {
    ...register(name, { required: requiredMessage }),
    placeholder,
    className,
  };

  return (
    <>
      {inputType === "input" && (
        <input
          type={name === "email" ? "email" : "text"}
          {...commonInputProps}
        />
      )}
      {inputType === "textarea" && <textarea {...commonInputProps} rows={4} />}
      {inputType === "checkbox" && (
        <div className="flex flex-rows items-start  ">
          <input type="checkbox" {...commonInputProps} className="w-4 h-4" />
          <label
            dangerouslySetInnerHTML={{ __html: placeholder }}
            className="ml-2 text-xs text-slate-300 text-left "
          />
        </div>
      )}
      {errorMsg && <p className={errorClassName}>{errorMsg}</p>}
    </>
  );
};
