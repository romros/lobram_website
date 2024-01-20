import { type SchemaTypeDefinition } from "sanity";
import { historiaSchema } from "./schemas/historiaSchema";
import { PaginesSchema } from "./schemas/menuSchema";
import { HeroSchema } from "./schemas/heroSchema";
import { ContactMapSchema } from "./schemas/contactMapSchema";
import { imageLibrarySchema } from "./schemas/imageLibrarySchema";
import { MiniCardSchema } from "./schemas/miniFitxaSchema";
import { activitySchema } from "./schemas/activitatsSchema";
import { NarrativaSchema } from "./schemas/narrativaSchema";
import { InfoGeneralSchema } from "./schemas/infoGeneralSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    historiaSchema as SchemaTypeDefinition,
    PaginesSchema as SchemaTypeDefinition,
    HeroSchema as SchemaTypeDefinition,
    ContactMapSchema as SchemaTypeDefinition,
    imageLibrarySchema as SchemaTypeDefinition,
    MiniCardSchema as SchemaTypeDefinition,
    activitySchema as SchemaTypeDefinition,
    NarrativaSchema as SchemaTypeDefinition,
    InfoGeneralSchema,
  ],
};
