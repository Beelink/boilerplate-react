import axios from "axios";
import Dog from "@entities/dog";
import { v4 as uuid } from "uuid";

interface DogResponse {
  message: string;
  status: string;
}

export const fetchRandomDog = async () => {
  const response: DogResponse = await axios
    .get<DogResponse>("https://dog.ceo/api/breeds/image/random")
    .catch((error) => {
      console.log(error);
    });
  return {
    id: uuid(),
    image: response.message,
  };
};
