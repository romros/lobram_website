import { HISTORIA_NAME } from "./schemas/historiaSchema";
import { PAGINES_NAME } from "./schemas/menuSchema";
import { HERO_NAME } from "./schemas/heroSchema";
import { CONTACT_MAP_NAME } from "./schemas/contactMapSchema";
import { IMATGES_LIB_NAME } from "./schemas/imageLibrarySchema";
import { MINIFITXES_NAME } from "./schemas/miniFitxaSchema";
import { PAGINES_ACTIVITATS_NAME } from "./schemas/activitatsSchema";
import { NARRATIVA_NAME } from "./schemas/narrativaSchema";

export const myStructure = (S: any) =>
  S.list()
    .title("Contingut")
    .items([
      S.listItem()
        .title("Pàgines")
        .child(
          S.list()
            .title("Pàgines")
            .items([
              S.listItem()
                .title("Pàgines d'activitats")
                .child(
                  S.documentTypeList(PAGINES_ACTIVITATS_NAME).title(
                    "Pàgines d'activitats"
                  )
                ),
            ])
        ),
      S.listItem()
        .title("Elements Generals")
        .child(
          S.list()
            .title("Elements Generals")
            .items([
              S.listItem()
                .title("Imatges")
                .child(S.documentTypeList(IMATGES_LIB_NAME).title("Imatges")),
              S.listItem()
                .title("Narratives")
                .child(S.documentTypeList(NARRATIVA_NAME).title("Narratives")),
              S.listItem()
                .title("Històries")
                .child(S.documentTypeList(HISTORIA_NAME).title("Històries")),
              S.listItem()
                .title("Mini Fitxes")
                .child(
                  S.documentTypeList(MINIFITXES_NAME).title("Mini Fitxes")
                ),
              S.listItem()
                .title("Capçaleres")
                .child(S.documentTypeList(HERO_NAME).title("Capçaleres")),
              S.listItem()
                .title("Formularis")
                .child(
                  S.documentTypeList(CONTACT_MAP_NAME).title("Formularis")
                ),
            ])
        ),
      S.listItem()
        .title("Configuració")
        .child(S.documentTypeList(PAGINES_NAME).title("Menú Principal")),
      // Aquí pots afegir més seccions si és necessari
    ]);
