import User from "@entities/user.entity";
import { USER_SIGNIN, USER_SET_IS_LOADING } from "@store/user/user.actions";

type UserSigninAction = {
  type: typeof USER_SIGNIN;
  payload: {
    user: User;
  };
};

type UserSetIsLoadingAction = {
  type: typeof USER_SET_IS_LOADING;
  payload: {
    loading: boolean;
  };
};

type UserAction = UserSigninAction | UserSetIsLoadingAction;

export default UserAction;
