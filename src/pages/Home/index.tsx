import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { FunctionComponent } from "react";
import "./index.scoped.scss";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="home-page__inner">
            <h1>Home page</h1>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default HomePage;
