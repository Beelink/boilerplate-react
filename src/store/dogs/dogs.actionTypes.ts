import Dog from "@entities/dog";
import { ADD_DOG, REMOVE_DOG_BY_ID } from "@store/dogs/dogs.actions";

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

type DogsAction = AddDogAction | RemoveDogByIdAction;

export default DogsAction;
