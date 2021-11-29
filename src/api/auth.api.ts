import axios, { AxiosResponse } from "axios";
import User from "@entities/user.entity";
import ApiResponse from "./types";

interface SigninApiResponse extends ApiResponse {
  data: User;
}

export const fetchSignin = async (
  email: string,
  password: string
): Promise<User | null> => {
  const response: AxiosResponse<SigninApiResponse> = await axios.post<SigninApiResponse>(
    `${__config.api.apiPrefix}/auth/signin`,
    { email, password }
  );

  if (response.data.error) {
    return null;
  } else {
    return response.data.data;
  }
};
