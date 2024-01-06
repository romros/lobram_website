import { type SchemaTypeDefinition } from "sanity";
import { historiaSchema } from "./historiaSchema";
import { PaginesSchema } from "./menuSchema";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    historiaSchema as SchemaTypeDefinition,
    PaginesSchema as SchemaTypeDefinition,
  ],
};
