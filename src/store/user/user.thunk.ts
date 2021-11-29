import { fetchSignin, fetchSignup } from "@api/auth.api";
import { Dispatch } from "redux";
import { signin, setIsLoading } from "./user.actionCreators";

export const fetchUserSigninThunk = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchSignin(email, password)
      .then((response) => {
        if (response.error) {
        } else {
          dispatch(signin(response.data));
        }
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchUserSignupThunk = (
  username: string,
  email: string,
  password: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchSignup(username, email, password)
      .then((response) => {
        if (response.error) {
        } else {
          dispatch(signin(response.data));
        }
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
