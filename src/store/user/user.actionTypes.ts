import User from "@entities/user.entity";
import { SIGNIN, SET_IS_LOADING } from "@store/user/user.actions";

type SignInAction = {
  type: typeof SIGNIN;
  payload: {
    user: User;
  };
};

type SetIsLoadingAction = {
  type: typeof SET_IS_LOADING;
  payload: {
    loading: boolean;
  };
};

type UserAction = SignInAction | SetIsLoadingAction;

export default UserAction;
