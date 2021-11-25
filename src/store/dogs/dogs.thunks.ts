import { fetchRandomDog } from "@api/dogs";
import { ADD_DOG } from "./dogs.actions";
import Dog from "@entities/dog";
import { Dispatch } from "redux";

export const generateRandomDog = () => {
  return (dispatch: Dispatch) => {
    fetchRandomDog()
      .then((dog: Dog) => {
        dispatch({
          type: ADD_DOG,
          payload: {
            dog,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
