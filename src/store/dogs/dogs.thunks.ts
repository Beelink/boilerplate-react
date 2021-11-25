import { fetchRandomDog } from "@api/dogs";
import { ADD_DOG } from "./dogs.actions";
import Dog from "@entities/dog";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator, Dispatch } from "redux";

export const generateRandomDog = () => {
  return (dispatch: Dispatch) => {
    fetchRandomDog().then((dog: Dog) => {
      dispatch({
        type: ADD_DOG,
        payload: {
          dog,
        },
      });
    });
  };
};
