import userInitialState from "@store/user/user.initialState";
import { USER_SIGNIN, USER_SET_IS_LOADING } from "@store/user/user.actions";
import UserAction from "@store/user/user.actionTypes";
import { UserState } from "@store/state";

const dogsReducer = (
  state: UserState = userInitialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case USER_SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default dogsReducer;
