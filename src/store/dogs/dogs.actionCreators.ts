import Dog from "@entities/dog";

import {
  ADD_DOG,
  REMOVE_DOG_BY_ID,
} from "@store/dogs/dogs.actions";

export const addDog = (dog: Dog) => {
  return {
    type: ADD_DOG,
    payload: {
      dog,
    },
  };
};

export const removeDogById = (id: number) => {
  return {
    type: REMOVE_DOG_BY_ID,
    payload: {
      id,
    },
  };
};
