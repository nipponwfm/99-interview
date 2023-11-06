export interface GetUserByIdParams {
  id: number;
}

export interface User {
  id: number;
  fullName: string;
  sex: number;
  phoneNumber: string;
  address: string;
}

export interface PostUsersParams {
  id: number;
  fullName: string;
  sex: number;
  phoneNumber: string;
  address: string;
}
