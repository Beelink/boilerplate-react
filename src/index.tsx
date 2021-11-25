import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import ScrollToTop from "@components/atoms/ScrollToTop";
import routes from "./routes";
import "./assets/scss/index.scss";

render(
  <BrowserRouter>
    {/* <ScrollToTop></ScrollToTop> */}
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById("root")
);
