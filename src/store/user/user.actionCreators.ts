import User from "@entities/user.entity";
import { USER_SIGNIN, USER_SET_IS_LOADING } from "@store/user/user.actions";

export const signin = (user: User) => {
  return {
    type: USER_SIGNIN,
    payload: {
      user,
    },
  };
};

export const setIsLoading = (loading: boolean) => {
  return {
    type: USER_SET_IS_LOADING,
    payload: {
      loading,
    },
  };
};
