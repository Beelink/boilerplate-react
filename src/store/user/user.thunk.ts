import { fetchSignin, fetchSignup, fetchCurrentUser } from "@api/auth.api";
import { Dispatch } from "redux";
import { signin, setIsLoading } from "./user.actionCreators";
import { toast } from "material-react-toastify";

export const fetchUserSigninThunk = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchSignin(email, password)
      .then((response) => {
        if (response.error) {
          toast.error(response.message);
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
          toast.error(response.message);
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

export const fetchCurrentUserThunk = (token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchCurrentUser(token)
      .then((response) => {
        if (response.error) {
          toast.error(response.message);
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
