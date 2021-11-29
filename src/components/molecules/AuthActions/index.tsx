import { FunctionComponent } from "react";
import { Button } from "rsuite";
import "./index.scoped.scss";
import { useHistory } from "react-router-dom";

const AuthActions: FunctionComponent = () => {
  const history = useHistory();

  const _goToSigninPage = () => {
    history.push("/signin");
  };

  const _goToSignupPage = () => {
    history.push("/signup");
  };

  return (
    <div className="auth-actions">
      <Button appearance="ghost" onClick={_goToSigninPage}>
        Sign In
      </Button>
      <Button appearance="primary" onClick={_goToSignupPage}>
        Sign Up
      </Button>
    </div>
  );
};

export default AuthActions;
