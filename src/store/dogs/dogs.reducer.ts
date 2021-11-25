import dogsInitialState from "@store/dogs/dogs.initialState";

import {
  ADD_DOG,
  REMOVE_DOG_BY_ID,
} from "@store/dogs/dogs.actions";
import DogsAction from "@store/dogs/dogs.actionTypes";
import { DogsState } from "@store/types";

const dogsReducer = (
  state: DogsState = dogsInitialState,
  action: DogsAction
): DogsState => {
  switch (action.type) {
    case ADD_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload.dog],
      };
    case REMOVE_DOG_BY_ID:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default dogsReducer;
