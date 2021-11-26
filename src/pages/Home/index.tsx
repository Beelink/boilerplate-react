import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { FunctionComponent } from "react";
import "./index.scoped.scss";
import { LangContext } from "@context/Lang";
import { useContext } from "react";

const HomePage: FunctionComponent = () => {
  const { t } = useContext(LangContext);

  return (
    <div className="home-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="home-page__inner">
            <h1>{t("page.home")}</h1>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default HomePage;
