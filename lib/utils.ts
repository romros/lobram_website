import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function RGBAToHexA(rgba: string): string {
  const parts = rgba.match(/\d+(\.\d+)?/g);
  if (!parts || parts.length < 4) {
    return ""; // Retorna un string buit si no és un valor RGBA vàlid.
  }

  let [r, g, b, a] = parts.map(Number);
  a = Math.round(a * 255);

  return `#${[r, g, b, a]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("")}`;
}

// Funció per comprovar si el string és un color RGBA vàlid.
export function isValidRGBA(str: string): boolean {
  const regex =
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d(\.\d+)?|1|0)\)$/;
  return regex.test(str);
}
