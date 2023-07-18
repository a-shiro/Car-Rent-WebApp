import "./App.css";
import Nav from "./common/Navigation/Navigation";
import { Footer } from "./common/Footer/Footer";
import { RoutesManager } from "./setup/routes-manager/RoutesManager";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Nav />
        <RoutesManager />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
