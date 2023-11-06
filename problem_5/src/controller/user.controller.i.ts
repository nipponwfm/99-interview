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
