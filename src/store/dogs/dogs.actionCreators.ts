import Dog from "@entities/dog";
import {
  ADD_DOG,
  REMOVE_DOG_BY_ID,
  SET_IS_LOADING,
} from "@store/dogs/dogs.actions";

export const addDog = (dog: Dog) => {
  return {
    type: ADD_DOG,
    payload: {
      dog,
    },
  };
};

export const removeDogById = (id: string) => {
  return {
    type: REMOVE_DOG_BY_ID,
    payload: {
      id,
    },
  };
};

export const setIsLoading = (loading: boolean) => {
  return {
    type: SET_IS_LOADING,
    payload: {
      loading,
    },
  };
};
