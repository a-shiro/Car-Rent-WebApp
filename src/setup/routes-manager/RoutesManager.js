import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { TermsAndConditions } from "../../pages/tac/TermsAndConditions";
import { PageNotFound } from "../../pages/404/404";
import { About } from "../../pages/about/About";
import { Contact } from "../../pages/contact/Contact";
import { Catalog } from "../../pages/catalog/Catalog";
import { RentCar } from "../../pages/rent-preview/RentCar";
import { Profile } from "../../pages/profile/Profile";
import { Login } from "../../pages/login/Login";
import { Register } from "../../pages/register/Register";
import { Administration } from "../../pages/administration/Administration";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Catalog />} />
      <Route path="/cars/:carModel" element={<RentCar />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/administration" element={<Administration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
