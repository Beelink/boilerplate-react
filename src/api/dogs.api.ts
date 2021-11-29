import axios, { AxiosResponse } from "axios";
import Dog from "@entities/dog.entity";
import uniqid from "uniqid";

interface DogResponse {
  message: string;
  status: string;
}

export const fetchRandomDog = async (): Promise<Dog> => {
  const response: AxiosResponse<DogResponse> = await axios.get<DogResponse>(
    "https://dog.ceo/api/breeds/image/random"
  );
  return {
    id: uniqid(),
    image: response.data.message,
  };
};
