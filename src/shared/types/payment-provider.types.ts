
export type TPaymentProvider = {
  id: string;
  tag: string;
  aggregator: {
    id: string;
    provider: string;
    payload: {
      instruction: string;
      ussd_code?: string;
    };
    img: string;
  };
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TCreatePaymentProvider = Omit<
  TPaymentProvider,
  "createdAt" | "updatedAt"
>;

export type TUpdatePaymentProvider = Partial<
  Omit<TPaymentProvider, "createdAt" | "updatedAt">
>;

export type TPaymentProviderFormData = {
  tag: string;
  provider: string;
  instruction: string;
  ussd_code: string;
  img: string;
  isActive: boolean;
};
