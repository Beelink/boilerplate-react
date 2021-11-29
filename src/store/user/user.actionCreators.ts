import User from "@entities/user.entity";
import { SIGNIN, SET_IS_LOADING } from "@store/user/user.actions";

export const signIn = (user: User) => {
  return {
    type: SIGNIN,
    payload: {
      user,
    },
  };
};

export const setIsLoading = (loading: boolean) => {
  return {
    type: SET_IS_LOADING,
    payload: {
      loading,
    },
  };
};
