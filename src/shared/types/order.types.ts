
export type TOrderExam = {
  examId: string;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
};

export type TOrderPerson = {
  fullName: string;
  age: number;
  sexe: string;
  phone: string;
  hospital: string;
};

export type TOrderPackage = {
  id: string;
  name: string;
  imageUrl: string;
  open?: boolean;
  packageChosen: string;
  examsChosen: TOrderExam[];
  usePackagePrice: boolean;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  people: TOrderPerson[];
  discount: number | null;
};

export type TOrderLatLong = {
  latitude: number;
  longitude: number;
};

export type TOrderAddress = {
  id: string;
  address: string;
  city: string;
  district: string;
  state: string;
  country: string;
  country_code: string;
  postcode: string;
  latLong: TOrderLatLong;
};

export type TPaymentFee = {
  id: string;
  amount: number;
  label: string;
  currency: string;
  rateType: string;
  rate: number;
  taxes: Array<{
    id: string;
    taxType: string;
    type: string;
    value: string;
    feeId: string;
  }>;
};

export type TPayment = {
  id: string;
  intentId: string;
  method: string;
  createdAt: string;
  number: string;
  currency: string;
  country: string;
  amount: number;
  provider: string;
  status: string;
  updatedAt: string;
  fees: TPaymentFee[];
};

export type TPaymentIntent = {
  id: string;
  currency: string;
  merchantId: string;
  customerReference: string;
  createdAt: string;
  updatedAt: Date;
  mode: string;
  overrideBusinessName: string;
  status: string;
  token: string;
  purchaseReference: string;
  lastPaymentFailure: {
    code: string;
    message: string | null;
  };
  amount: number;
  payments: TPayment[];
};

export type TOrder = {
  id: string;
  name: string;
  patientId: string;
  nurseId?: string;
  status:
    | "pending" // En attente de paiement.
    | "inProgress" // Paiement effectué.
    | "confirmed" // Si in progress, il faut confirmer la commande.
    | "sampleTaken" // Prélèvement effectué.
    | "waitingForResults" // En attente des résultats.
    | "resultsReady" // Résultats prêts.
    | "resultsSent" // Résultats envoyés.
    | "cancelled"; // Commande annulée.
  createdAt: Date;
  updatedAt: Date;
  orderDate: Date;
  orderNumber: string;
  prescriptionUrl: string | null;
  packages: TOrderPackage[];
  subTotal: number;
  finalPrice: number;
  discount: number | null;
  wantsPaperReport: boolean;
  digitalReportFee: number;
  diagnosticFee: number;
  paperReportFee: number;
  addressUsed: TOrderAddress;
  availabilityId: string;
  selectedDate: string;
  selectedSlotHuman: string;
  selectedTimeSlot: string;
  selectedStartTime: string;
  selectedEndTime: string;
  selectedDayOfWeek: number;
  paymentStatus:
    | "unpaid"
    | "paid"
    | "refunded"
    | "failed"
    | "pending"
    | "successful";
  paymentProvider: string;
  paymentProviderId: string;
  paymentReference: string;
  paymentIntent: TPaymentIntent;
  resultUrl?: string;
  samplingFee: number;
  weekSamplingFee: number;
  transportFee: number;
};

export type TUpdateOrder = {
  status?: TOrder["status"];
  resultUrl?: string;
};
