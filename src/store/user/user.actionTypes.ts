import User from "@entities/user.entity";
import {
  USER_SIGNIN,
  USER_SET_IS_LOADING,
  USER_LOGOUT,
} from "@store/user/user.actions";

type SigninAction = {
  type: typeof USER_SIGNIN;
  payload: {
    user: User;
  };
};

type SetIsLoadingAction = {
  type: typeof USER_SET_IS_LOADING;
  payload: {
    loading: boolean;
  };
};

type LogoutAction = {
  type: typeof USER_LOGOUT;
};

type UserAction = SigninAction | SetIsLoadingAction | LogoutAction;

export default UserAction;
