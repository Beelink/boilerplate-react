import { FunctionComponent } from "react";
import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { LangProvider } from "@context/Lang";
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import "./index.scoped.scss";

const App: FunctionComponent<RouteConfigComponentProps> = ({ route }) => {
  return (
    <LangProvider>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
      <div className="app-layout">
        <Header />
        <div className="app-layout__page">
        {renderRoutes(route?.routes)}</div>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default App;
