
export type THubConfig = {
  id: string;
  apiKey: string;
  merchantId: string;
  environment: "sandbox" | "live";
  baseUrl: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TCreateHubConfig = Omit<THubConfig, "createdAt" | "updatedAt">;

export type TUpdateHubConfig = Partial<
  Omit<THubConfig, "createdAt" | "updatedAt">
>;
