import { fetchRandomDog } from "@api/dogs";
import Dog from "@entities/dog";
import { Dispatch } from "redux";
import { addDog, setIsLoading } from "./dogs.actionCreators";

export const addRandomDog = () => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchRandomDog()
      .then((dog: Dog) => {
        dispatch(addDog(dog));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
