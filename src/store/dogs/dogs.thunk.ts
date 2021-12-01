import { fetchRandomDog } from "@api/dogs.api";
import Dog from "@entities/dog.entity";
import { Dispatch } from "redux";
import { addDog, setIsLoading } from "./dogs.actionCreators";

export const fetchAddRandomDogThunk = () => {
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
