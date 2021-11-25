import { useContext, FunctionComponent } from "react";
import { LangContext } from "@context/Lang";
import "./index.scoped.scss";
import WidthContainer, { WidthContainerSlot } from "@components/atoms/WidthContainer";
import LangChooser from "@components/molecules/LangChooser";
import { NavLink } from "react-router-dom";

const Header: FunctionComponent = () => {
  const { t } = useContext(LangContext);

  const menuItems = [
    {
      title: t("header.menu.about"),
      to: "/about",
    },
  ];

  return (
    <header className="header">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="header__inner">
            <ul className="header__nav">
              { menuItems.map((item, itemIndex) => {
                return (
                  <li><NavLink to={item.to}>{ item.title }</NavLink></li>

                )
              }) }
              </ul>
            <LangChooser />
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </header>
  );
};

export default Header;
