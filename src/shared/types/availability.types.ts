
export type TAvailability = {
  id: string;
  dayOfWeek: number;
  label: string;
  fullDate: string;
  startTime: string;
  endTime: string;
  stepper: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TCreateAvailability = Omit<
  TAvailability,
  "id" | "createdAt" | "updatedAt"
>;
export type TUpdateAvailability = Partial<
  Omit<TAvailability, "id" | "createdAt" | "updatedAt">
>;

export type TAvailabilityFormData = {
  dayOfWeek: number;
  startTime: string;
  fullDate: string;
  endTime: string;
  stepper: number;
  label: string;
};
