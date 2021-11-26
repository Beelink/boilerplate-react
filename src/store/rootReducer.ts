import { combineReducers } from "redux";

import dogsReducer from "@store/dogs/dogs.reducer";

const rootReducer = combineReducers({
  dogs: dogsReducer,
});

export default rootReducer;
