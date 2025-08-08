export type TAddress = {
  label: string;
  city: string;
};

export type TCreateAddress = Pick<TAddress, "label" | "city">;

export type TUpdateAddress = Partial<TCreateAddress>;

export type TAddressFormValues = {
  label: string;
  city: string;
};
