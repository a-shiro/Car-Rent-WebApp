import "./App.css";
import { Nav } from "./common/Navigation/Navigation";
import { Footer } from "./common/Footer/Footer";
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
