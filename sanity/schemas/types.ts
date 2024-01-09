type LocalizedTextField = {
  name: string;
  type: "text";
  title: string;
  description: string;
};

export const localizedTextFields: LocalizedTextField[] = [
  {
    name: "ca",
    type: "text",
    title: "Català",
    description: "Text en catalan",
  },
  {
    name: "es",
    type: "text",
    title: "Castellano",
    description: "Text en castellà",
  },
  // Pots afegir més idiomes aquí segons sigui necessari.
];

type LocalizedStringField = {
  name: string;
  type: "string";
  title: string;
  description: string;
};

export const localizedStringFields: LocalizedStringField[] = [
  {
    name: "ca",
    type: "string",
    title: "Català",
    description: "Text en catalan",
  },
  {
    name: "es",
    type: "string",
    title: "Castellano",
    description: "Text en castellà",
  },
  // Pots afegir més idiomes aquí segons sigui necessari.
];
