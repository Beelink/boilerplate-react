import { FunctionComponent, useEffect, useState } from "react";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { InputGroup, Input, IconButton } from "rsuite";
import {
  ArrowRightLine as SignupIcon,
  UserInfo as UserIcon,
} from "@rsuite/icons";
import "./index.scoped.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSigninThunk } from "@store/user/user.thunk";
import State from "@store/state";
import { useHistory } from "react-router";

const SignupPage: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);
  const isLoading = useSelector((state: State) => state.user.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    provider: "",
    password: "",
  });

  useEffect(() => {
    _goToProfile();
  });

  useEffect(() => {
    _goToProfile();
  }, [isLoggedIn]);

  const _goToProfile = () => {
    if (isLoggedIn) {
      history.push("/profile");
    }
  };

  const _toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const _signup = () => {
    dispatch(
      fetchUserSigninThunk(
        `${signupData.email}@${signupData.provider}`,
        signupData.password
      )
    );
  };

  return (
    <div className="signin-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="signin-page__inner">
            <h1>Sign Up</h1>
            <div className="signin-page__form">
              <div className="signin-page__row">
                <InputGroup>
                  <InputGroup.Addon>
                    <UserIcon />
                  </InputGroup.Addon>
                  <Input
                    placeholder="Name"
                    onChange={(e) => {
                      setSignupData({ ...signupData, username: e });
                    }}
                  />
                </InputGroup>
              </div>
              <div className="signin-page__row">
                <InputGroup>
                  <Input
                    placeholder="Email"
                    onChange={(e) => {
                      setSignupData({ ...signupData, email: e });
                    }}
                  />
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <Input
                    placeholder="*.com"
                    onChange={(e) => {
                      setSignupData({ ...signupData, provider: e });
                    }}
                  />
                </InputGroup>
              </div>
              <div className="signin-page__row">
                <InputGroup inside>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => {
                      setSignupData({ ...signupData, password: e });
                    }}
                  />
                  <InputGroup.Button onClick={_toggleShowPassword}>
                    {showPassword ? "Hide" : "Show"}
                  </InputGroup.Button>
                </InputGroup>
              </div>
              <div className="signin-page__row">
                <IconButton icon={<SignupIcon />} onClick={_signup}>
                  Sign Up
                </IconButton>
              </div>
            </div>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default SignupPage;
