export type UserRole = "doctor" | "admin" | "super-admin" | "guest" | "patient";
import { TAddress } from "./addresse.types";

export type TUser = {
  uid: string;
  id: string;
  role: UserRole;
  status: "active" | "inactive";
  displayName: string;
  phoneNumber: string;
  fcmToken?: string;
  email: string;
  addresses: TAddress[];
  createdAt?: Date;
  lastLoginAt?: Date;
  lastLogoutAt?: Date;
  lastActivityAt?: Date;
  getIdToken?: () => Promise<string>;
};

export type TCreateUser = Pick<
  TUser,
  "role" | "displayName" | "phoneNumber" | "email" | "addresses" | "status"
>;

export type TUpdateUser = Partial<TCreateUser>;

export type TUserFormValues = {
  role: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  fcmToken?: string;
  addresses: TAddress[];
  status: "active" | "inactive";
  password: string;
  passwordConfirmation: string;
  hospital?: string;
};

export type TUserFormData = {
  role?: string;
  displayName?: string;
  phoneNumber?: string;
  fcmToken?: string;
  email?: string;
  addresses?: TAddress[];
  status?: "active" | "inactive";
  password?: string;
  passwordConfirmation?: string;
};

export interface TUserCredentials {
  email: string;
  password: string;
}
