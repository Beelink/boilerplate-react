import { FunctionComponent } from "react";
import { createSlot } from "react-slotify";
import "./index.scoped.scss";

export const WidthContainerSlot = createSlot();

const WidthContainer: FunctionComponent = ({ children }) => {
  return (
    <div className="width-container">
      <WidthContainerSlot.Renderer childs={children}>
        This is default slot content
      </WidthContainerSlot.Renderer>
    </div>
  );
};

export default WidthContainer;
