import { combineReducers } from "redux";

import stopwatchReducer from "@store/dogs/dogs.reducer";

const rootReducer = combineReducers({
  stopwatch: stopwatchReducer,
});

export default rootReducer;
