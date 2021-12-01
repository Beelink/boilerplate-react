import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { FunctionComponent } from "react";
import "./index.scoped.scss";
import { LangContext } from "@context/Lang";
import { useContext } from "react";
import { useSelector } from "react-redux";
import State from "@store/state";

const ProfilePage: FunctionComponent = () => {
  const { t } = useContext(LangContext);
  const user = useSelector((state: State) => state.user.user);

  return (
    <div className="profile-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="profile-page__inner">
            <h1>{t("profile")}</h1>
            {user && (
              <div className="profile-page__user-info">
                <span>{user.username}</span>
              </div>
            )}
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default ProfilePage;
