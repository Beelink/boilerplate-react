import { fetchSignIn } from "@api/auth.api";
import User from "@entities/user.entity";
import { Dispatch } from "redux";
import { signIn, setIsLoading } from "./user.actionCreators";

export const fetchSignInThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchSignIn()
      .then((user: User) => {
        dispatch(signIn(user));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
