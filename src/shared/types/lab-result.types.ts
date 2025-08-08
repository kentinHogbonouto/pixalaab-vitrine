
export type TLabResult = {
  id: string;
  orderId: string;
  status: string;
  labReportText: string;
  labReportFileUrl: string;
  laboratoryId: string;
  laboratoryName: string;
  doctorInterpretation?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TLabResultFormData = {
  labReportText: string;
  labReportFileUrl: string;
  doctorInterpretation?: string;
  laboratoryId: string;
  laboratoryName?: string;
  orderId: string
};

export type TCreateLabResult = Omit<
  TLabResult,
  "id" | "createdAt" | "updatedAt"
>;

export type TUpdateLabResult = Partial<
  Omit<TLabResult, "id" | "createdAt" | "updatedAt">
>;
