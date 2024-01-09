export type LocalizedText = {
  [lang: string]: string;
};

// Tipus millorats
export type ImageAsset = {
  _ref: string;
  _type: string;
};

export type ImageData = {
  _type: "image";
  _url?: string;
  asset: ImageAsset;
};
