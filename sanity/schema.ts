import { type SchemaTypeDefinition } from "sanity";
import { historiaSchema } from "./historiaSchema";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [historiaSchema as SchemaTypeDefinition], // Fix: Add 'as SchemaTypeDefinition' to cast historiaSchema as a value
};
