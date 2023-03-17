import { Nav } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { RoutesManager } from "./setup/routes-manager/RoutesManager";
import { BrowserRouter } from "react-router-dom";

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
