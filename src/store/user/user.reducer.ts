import userInitialState from "@store/user/user.initialState";
import { SIGNIN, SET_IS_LOADING } from "@store/user/user.actions";
import UserAction from "@store/user/user.actionTypes";
import { UserState } from "@store/state";

const dogsReducer = (
  state: UserState = userInitialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload.user,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default dogsReducer;
