
export type TAppConfig = {
  id: string;
  diagnosticFee?: number | null;
  paperReportFee?: number | null;
  digitalReportFee?: number | null;
  phoneNumber?: string | null;
  whatsappNumber?: string | null;
  email?: string | null;
  address?: string | null;
  assistanceTitle?: string | null;
  assistanceContent?: string | null;
  defaultCurrency?: string | null;
  maintenanceMode?: boolean;
  appointmentMinDuration?: number | null;
  appointmentMaxDays?: number | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  termsContent?: string | null;
  aboutContent?: string | null;
  privacyContent?: string | null;
  samplingFee?: number | null;
  weekSamplingFee?: number | null;
  transportFee?: number | null;
};

export type TUpdateConfig = Partial<
  Omit<TAppConfig, "id" | "createdAt" | "updatedAt">
>;
