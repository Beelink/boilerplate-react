import Dog from "@entities/dog";

export type DogsState = {
  dogs: Dog[];
  isLoading: boolean;
};

type State = {
  dogs: DogsState;
};

export default State;
