import { useContext, FunctionComponent } from "react";
import { LangContext } from "@context/Lang";
import "./index.scoped.scss";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import LangChooser from "@components/molecules/LangChooser";
import { NavLink } from "react-router-dom";
import Logo from "@components/atoms/Logo";
import { Nav } from "rsuite";

const Header: FunctionComponent = () => {
  const { t } = useContext(LangContext);

  const menuItems = [
    {
      title: t("header.menu.about"),
      to: "/about",
    },
    {
      title: t("header.menu.news"),
      to: "/news",
    },
    {
      title: t("header.menu.contacts"),
      to: "/contacts",
    },
  ];

  return (
    <header className="header">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="header__inner">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__nav">
              <Nav>
                {menuItems.map((item, itemIndex) => {
                  return (
                    <Nav.Item key={itemIndex} as="div">
                      <NavLink to={item.to} className="header__nav-link">{item.title}</NavLink>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </div>
            <LangChooser />
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </header>
  );
};

export default Header;
