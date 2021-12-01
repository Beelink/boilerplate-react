import { FunctionComponent, useContext } from "react";
import { Button } from "rsuite";
import "./index.scoped.scss";
import { useHistory } from "react-router-dom";
import { LangContext } from "@context/Lang";

const AuthActions: FunctionComponent = () => {
  const history = useHistory();
  const { t } = useContext(LangContext);

  const _goToSigninPage = () => {
    history.push("/signin");
  };

  const _goToSignupPage = () => {
    history.push("/signup");
  };

  return (
    <div className="auth-actions">
      <Button appearance="ghost" onClick={_goToSigninPage}>
        {t("signin")}
      </Button>
      <Button appearance="primary" onClick={_goToSignupPage}>
        {t("signup")}
      </Button>
    </div>
  );
};

export default AuthActions;
