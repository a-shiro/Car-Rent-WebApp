import { Nav } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { BrowserRouter } from "react-router-dom";
import { RoutesManager } from "./setup/routes-manager/RoutesManager";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <RoutesManager />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
