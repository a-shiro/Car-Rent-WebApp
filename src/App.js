import { Nav } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { RoutesManager } from "./setup/routes-manager/RoutesManager";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Nav />
      <RoutesManager />
      <Footer />
    </Fragment>
  );
}

export default App;
