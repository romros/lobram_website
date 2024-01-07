import { type SchemaTypeDefinition } from "sanity";
import { historiaSchema } from "./historiaSchema";
import { PaginesSchema } from "./menuSchema";
import { HeroSchema } from "./heroSchema";
import { ContactMapSchema } from "./contactMapSchema";
import { imageLibrarySchema } from "./imageLibrarySchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    historiaSchema as SchemaTypeDefinition,
    PaginesSchema as SchemaTypeDefinition,
    HeroSchema as SchemaTypeDefinition,
    ContactMapSchema as SchemaTypeDefinition,
    imageLibrarySchema as SchemaTypeDefinition,
  ],
};
