import { Response } from "express";

export type UserResponse = Response<
  Record<
    any,
    {
      id: number;
      fullName: string;
      sex: number;
      phoneNumber: string;
      address: string;
    }
  >
>;

export type UsersResponse = Response<
  Record<
    any,
    Array<{
      id: number;
      fullName: string;
      sex: number;
      phoneNumber: string;
      address: string;
    }>
  >
>;

export interface PutUserParams {
  fullName: string;
  sex: number;
  phoneNumber: string;
  address: string;
}
