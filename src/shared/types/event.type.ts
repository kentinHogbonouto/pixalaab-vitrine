import { TAvailability } from "./availability.types";
import { TOrder } from "./order.types";

export type TEvent = {
  type: "availability" | "order";
  data: TAvailability | TOrder;
  color: string;
  startsBefore: boolean;
  endsAfter: boolean;
  span: number;
  startMinutes: number;
  endMinutes: number;
};
