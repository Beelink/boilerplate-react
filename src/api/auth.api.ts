import axios, { AxiosResponse } from "axios";
import User from "@entities/user.entity";

export const fetchSignIn = async (): Promise<User> => {
  const response: AxiosResponse<User> = await axios.post<User>(
    `${__config.api.apiPrefix}/auth/signin`
  );
  return response.data;
};
