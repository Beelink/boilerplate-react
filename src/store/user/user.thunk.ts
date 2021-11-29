import { fetchSignin } from "@api/auth.api";
import User from "@entities/user.entity";
import { Dispatch } from "redux";
import { signin, setIsLoading } from "./user.actionCreators";

export const fetchUserSigninThunk = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchSignin(email, password)
      .then((user: User | null) => {
        if (user) {
          dispatch(signin(user));
        }
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
