import { FunctionComponent } from "react";
import { Dropdown, ButtonToolbar } from "rsuite";
import "./index.scoped.scss";
import { useSelector } from "react-redux";
import State from "@store/state";

const ProfileMenu: FunctionComponent = () => {
  const username = useSelector((state: State) => state.user.user?.username);

  return (
    <div className="auth-actions">
      <ButtonToolbar>
        <Dropdown title={ username }>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown>
      </ButtonToolbar>
    </div>
  );
};

export default ProfileMenu;
