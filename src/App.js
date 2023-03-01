import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Nav } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { TermsAndConditions } from "./pages/tac/TermsAndConditions";
import { PageNotFound } from "./pages/404/404";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Catalog } from "./pages/catalog/Catalog";
import { RentCar } from "./pages/catalog/RentCar";
import { Profile } from "./pages/profile/Profile";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
