
export type TFaqItem = {
  id: string;
  question: string;
  response: string;
};

export type TPack = {
  id: string;
  name: string;
  isActive: boolean;
  searchName: string;
  price: number;
  imageUrl: string;
  examsIncluded: string[];
  faqs: TFaqItem[];
  htmlPreview: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TCreatePack = Omit<TPack, "id" | "createdAt" | "updatedAt">;
export type TUpdatePack = Partial<
  Omit<TPack, "id" | "createdAt" | "updatedAt">
>;

export type TPackFormData = {
  name: string;
  price: number;
  imageUrl?: string;
  examsIncluded: string[];
  faqs: TFaqItem[];
  htmlPreview: string;
  isActive: boolean;
};
