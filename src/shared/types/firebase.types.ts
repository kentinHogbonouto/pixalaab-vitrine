export type TWhereOperator = "==" | "<" | ">" | "<=" | ">=";

export type TQueryCondition<T> = {
  field: keyof T;
  operator: TWhereOperator;
  value: T[keyof T];
};

export type TSortOptions<T> = {
  field: keyof T;
  direction: "asc" | "desc";
};
