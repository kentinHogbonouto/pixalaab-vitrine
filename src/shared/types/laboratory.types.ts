
export type TLaboratory = {
  id: string;
  name: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TCreateLaboratory = Omit<
  TLaboratory,
  "id" | "createdAt" | "updatedAt"
>;

export type TUpdateLaboratory = Partial<
  Omit<TLaboratory, "createdAt" | "updatedAt">
>;

export type TLaboratoryFormData = {
  name: string;
  address: string;
  isActive: boolean;
};
