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

// Funció que donat un color RGA o un hexadeciomal, enfoqueix el color un percentatge donat.
export function darkenRGBA(str: string, percent: number): string {
  if (!isValidRGBA(str)) {
    // enfosqueix el hexadecima un percentatge donat.
    const hex = str.replace("#", "");
    const num = parseInt(hex, 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const B = ((num >> 8) & 0x00ff) + amt;
    const G = (num & 0x0000ff) + amt;
    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)}`;
  } else {
    const parts = str.match(/\d+(\.\d+)?/g);
    if (!parts || parts.length < 4) {
      return str; // Retorna el mateix string si no és un valor RGBA vàlid.
    }

    let [r, g, b, a] = parts.map(Number);
    a = Math.round(a * 255);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}
