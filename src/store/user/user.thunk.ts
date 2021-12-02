import { fetchSignin, fetchSignup } from "@api/auth.api";
import { fetchCurrentUser, fetchChangeUserPassword } from "@api/user.api";
import { Dispatch } from "redux";
import {
  signin,
  setIsLoading,
  changeUserPassword,
} from "./user.actionCreators";
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

export const fetchChangeUserPasswordThunk = (
  token: string,
  oldPassword: string,
  newPassword: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    fetchChangeUserPassword(token, oldPassword, newPassword)
      .then((response) => {
        if (response.error) {
          toast.error(response.message);
        } else {
          dispatch(changeUserPassword(newPassword));
          toast.success(response.message);
        }
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
