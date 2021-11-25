import { FunctionComponent } from "react";
import "./index.scoped.scss";

const Loader: FunctionComponent = () => {
  return (
    <div className="loader">
      <div className="loader__lds-dual-ring" />
    </div>
  );
};

export default Loader;
