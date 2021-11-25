import { FunctionComponent } from "react";
import Header from "@components/organisms/Header";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { LangProvider } from "@context/Lang";

const App: FunctionComponent<RouteConfigComponentProps> = ({ route }) => {
  return (
    <LangProvider>
      <div className="app-layout">
        <Header />
        {renderRoutes(route?.routes)}
      </div>
    </LangProvider>
  );
};

export default App;
