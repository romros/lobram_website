import { createClient } from "next-sanity";

const sanityImageUrlBase = "https://cdn.sanity.io/images/tb531kyh/production/";

function extractImageID(imageRef: any) {
  const indexLastDash = imageRef.lastIndexOf("-");
  if (indexLastDash !== -1) {
    // Canvia l'últim '-' per un '.' per formar la URL correcta de la imatge
    imageRef =
      imageRef.substring(0, indexLastDash) +
      "." +
      imageRef.substring(indexLastDash + 1);
  }
  const [_, id] = imageRef.split("image-");
  return id;
}

function processarImatgesHistores(histories: any): any {
  return histories.map((historia: any) => {
    const imageId =
      historia.image && historia.image.asset
        ? extractImageID(historia.image.asset._ref)
        : null;
    const imageUrl = imageId ? `${sanityImageUrlBase}${imageId}` : null;
    return { ...historia, imageUrl };
  });
}

export async function fetchHistories() {
  const client = createClient({
    projectId: "tb531kyh",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,
  });
  try {
    /*
vull fer el fetch ordenat ascendentment per ordre
*/
    const histories = await client.fetch(
      `*[_type == "historia"] | order(Ordre asc)`
    );

    return processarImatgesHistores(histories);
  } catch (error) {
    console.error("Error amb sanity:", error);
    throw new Error("Fallat al carregar les històries");
  }
}
