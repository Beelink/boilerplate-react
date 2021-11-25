import Dog from "@entities/dog";

import {
  ADD_DOG,
  REMOVE_DOG_BY_ID,
  FETCH_RANDOM_DOG_IMAGE,
} from "@store/dogs/dogs.actions";

type AddDogAction = {
  type: typeof ADD_DOG;
  payload: {
    dog: Dog;
  };
};

type RemoveDogByIdAction = {
  type: typeof REMOVE_DOG_BY_ID;
  payload: {
    id: number;
  };
};

type FetchRandomDogImageAction = {
  type: typeof FETCH_RANDOM_DOG_IMAGE;
};

type DogsAction =
  | AddDogAction
  | RemoveDogByIdAction
  | FetchRandomDogImageAction;

export default DogsAction;
