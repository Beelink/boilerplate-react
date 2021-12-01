import { FunctionComponent } from "react";
import { Dropdown, ButtonToolbar } from "rsuite";
import "./index.scoped.scss";
import { useSelector, useDispatch } from "react-redux";
import State from "@store/state";
import { logout } from "@store/user/user.actionCreators";

const ProfileMenu: FunctionComponent = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: State) => state.user.user?.username);

  const _logout = () => {
    dispatch(logout())
  }

  return (
    <div className="auth-actions">
      <ButtonToolbar>
        <Dropdown title={ username }>
          <Dropdown.Item onClick={_logout}>Logout</Dropdown.Item>
        </Dropdown>
      </ButtonToolbar>
    </div>
  );
};

export default ProfileMenu;
