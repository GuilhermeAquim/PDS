export type User = {
  id_: number;
  login: string;
  admin: boolean;
  name: string;
  password: string;
};

export type UserApiResponse = {
  token: string;
  user: User;
};
