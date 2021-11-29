import { FunctionComponent, useState } from "react";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { InputGroup, Input, IconButton } from "rsuite";
import { ArrowRightLine as SigninIcon } from "@rsuite/icons";
import "./index.scoped.scss";

const SigninPage: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const _toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const _signin = () => {};

  return (
    <div className="signin-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="signin-page__inner">
            <h1>Sign In</h1>
            <div className="signin-page__form">
              <div className="signin-page__row">
                <InputGroup>
                  <Input placeholder="Email" />
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <Input placeholder="*.com" />
                </InputGroup>
              </div>
              <div className="signin-page__row">
                <InputGroup inside>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputGroup.Button onClick={_toggleShowPassword}>
                    {showPassword ? "Hide" : "Show"}
                  </InputGroup.Button>
                </InputGroup>
              </div>
              <div className="signin-page__row">
                <IconButton icon={<SigninIcon />} onClick={_signin}>
                  Sign In
                </IconButton>
              </div>
            </div>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default SigninPage;
