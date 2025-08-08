
export type TExamCategory = {
  id?: string;
  name: string;
  description?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TCreateExamCategory = Omit<
  TExamCategory,
  "id" | "createdAt" | "updatedAt"
>;
export type TUpdateExamCategory = Partial<
  Omit<TExamCategory, "id" | "createdAt" | "updatedAt">
>;

export type TExam = {
  id: string;
  name: string;
  price: number;
  purchasePrice: number;
  imageUrl: string;
  description: string;
  isRecommended: boolean;
  categoryId: string;
  diseaseCategory: string;
  testType: "AutoTest" | "Prélèvement";
  createdAt: Date;
  updatedAt: Date;
};

export type TExamFormData = {
  name: string;
  price: number;
  purchasePrice: number;
  imageUrl?: string;
  description: string;
  isRecommended: boolean;
  categoryId: string;
  diseaseCategory: string;
  testType: "AutoTest" | "Prélèvement";
};

export type TCreateExam = Omit<TExam, "id" | "createdAt" | "updatedAt">;
export type TUpdateExam = { id: string } & Partial<
  Omit<TExam, "createdAt" | "updatedAt">
>;
