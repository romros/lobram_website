import { createClient, SanityClient, SanityDocument } from "next-sanity";
import { CapsaleraData } from "./definitions";
import { urlForImage } from "@/sanity/lib/image";

// Constants globals
const SANITY_PROJECT_ID = "tb531kyh";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2021-03-25";
const sanityImageUrlBase = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/`;

// Crea una única instància del client de Sanity
const client: SanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: false,
});

function extractImageID(imageRef: string): string | null {
  // Busca el prefix "image-" i després captura tot fins al final de la cadena.
  const match = imageRef.match(/image-(.+)/);
  if (match) {
    const rest = match[1];
    const lastDashIndex = rest.lastIndexOf("-");
    if (lastDashIndex !== -1) {
      const identifier = rest.substring(0, lastDashIndex);
      const extension = rest.substring(lastDashIndex + 1);
      // Canvia '-' per '.' abans de l'extensió.
      return `${identifier}.${extension}`;
    }
  }

  console.log("No s'ha trobat coincidència");
  return null;
}

function processarImatgesRecursivament(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(processarImatgesRecursivament);
  } else if (obj && typeof obj === "object") {
    const nouObj: SanityDocument = { ...obj };
    for (const key of Object.keys(nouObj)) {
      if (
        nouObj[key]?._type === "image" &&
        typeof nouObj[key].asset?._ref === "string"
      ) {
        nouObj[key]._url = urlForImage(nouObj[key]);
      }
      nouObj[key] = processarImatgesRecursivament(nouObj[key]);
    }
    return nouObj;
  } else {
    return obj;
  }
}

// Funcions d'extracció de dades
export async function fetchHistories(): Promise<SanityDocument[]> {
  try {
    const histories = await client.fetch(
      `*[_type == "historia"] | order(Ordre asc) {_id,"imatge": imatge->image,description,link_button,title,text_button,foto_esquerra,Ordre}`
    );
    return processarImatgesRecursivament(histories);
  } catch (error) {
    console.error("Error fetching histories from Sanity:", error);
    throw new Error("Failed to load histories");
  }
}

export async function fetchPagines() {
  try {
    const pagines = await client.fetch(
      `*[_type == "pagines"] | order(ordre asc)`
    );
    return pagines;
  } catch (error) {
    console.error("Error fetching pages from Sanity:", error);
    throw new Error("Failed to load pages");
  }
}

export async function fetchCapsalera(
  href: string
): Promise<SanityDocument | null> {
  try {
    const capsalera: SanityDocument = await client.fetch(
      `*[_type == "capsalera" && Pagina->href=="${href}"]{title, "imatge": imatge->image, subtitle,"imatge_logo":imatge_logo->image}[0]`
    );
    if (!capsalera) {
      throw new Error("Header not found");
    }
    return processarImatgesRecursivament([capsalera])[0];
  } catch (error) {
    console.error("Error fetching header from Sanity:", error);
    throw new Error("Failed to load header");
  }
}

export async function fetchMainContactMap(): Promise<SanityDocument> {
  try {
    const contactMap = await client.fetch(
      `*[_type == "contactMap" && (!defined(Pagina) || Pagina == null)][0]`
    );

    return processarImatgesRecursivament(contactMap);
  } catch (error) {
    console.error("Error fetching contact map from Sanity:", error);
    throw new Error("Failed to load contact map");
  }
}
