import Dog from "@entities/dog.entity";
import {
  ADD_DOG,
  REMOVE_DOG_BY_ID,
  SET_IS_LOADING,
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
    id: string;
  };
};

type SetIsLoadingAction = {
  type: typeof SET_IS_LOADING;
  payload: {
    loading: boolean;
  };
};

type DogsAction = AddDogAction | RemoveDogByIdAction | SetIsLoadingAction;

export default DogsAction;
