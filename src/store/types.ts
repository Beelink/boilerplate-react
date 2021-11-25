import Dog from "@entities/dog";

export type DogsState = {
  dogs: Dog[];
};

type State = {
  dogs: DogsState;
};

export default State;
