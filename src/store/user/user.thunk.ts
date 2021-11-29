import { fetchSignin } from "@api/auth.api";
import User from "@entities/user.entity";
import { Dispatch } from "redux";
import { userSignin, userSetIsLoading } from "./user.actionCreators";

export const fetchUserSigninThunk = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch(userSetIsLoading(true));
    fetchSignin(email, password)
      .then((user: User | null) => {
        if (user) {
          dispatch(userSignin(user));
        }
        dispatch(userSetIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
