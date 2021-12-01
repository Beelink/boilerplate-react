import { FunctionComponent, useContext } from "react";
import { Dropdown, ButtonGroup, Whisper, IconButton, Popover, Button } from "rsuite";
import "./index.scoped.scss";
import { useSelector, useDispatch } from "react-redux";
import State from "@store/state";
import { logout } from "@store/user/user.actionCreators";
import { useHistory } from "react-router-dom";
import { LangContext } from "@context/Lang";
import { ArrowDown as ArrowDownIcon } from "@rsuite/icons";

const ProfileMenu: FunctionComponent = () => {
  const { t } = useContext(LangContext)
  const history = useHistory();
  const dispatch = useDispatch();
  const username = useSelector((state: State) => state.user.user?.username);

  const _logout = () => {
    dispatch(logout());
  }

  const _goToProfile = () => {
    history.push("/profile");
  }

  return (
    <div className="profile-menu">
      <ButtonGroup>
        <Button
          onClick={_goToProfile} 
          title={t("profile")} 
          appearance="ghost" 
        >{ username }</Button>
        <Whisper placement="bottomStart" trigger="click" speaker={
          <Popover>
            <Dropdown.Menu>
              <Dropdown.Item onClick={_goToProfile}>{t("profile")}</Dropdown.Item>
              <Dropdown.Item onClick={_logout}>{t("logout")}</Dropdown.Item>
            </Dropdown.Menu>
          </Popover>}>
          <IconButton appearance="ghost" icon={<ArrowDownIcon />} />
        </Whisper>
      </ButtonGroup>
    </div>
  );
};

export default ProfileMenu;
