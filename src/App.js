import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Nav } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { PageNotFound } from "./pages/404";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Catalog } from "./pages/catalog/Catalog";
import { RentCar } from "./pages/catalog/RentCar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Catalog />} />
          <Route path="/whatever-car-and-model" element={<RentCar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
