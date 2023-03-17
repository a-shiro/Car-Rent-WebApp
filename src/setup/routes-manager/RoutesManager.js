import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { TermsAndConditions } from "../../pages/tac/TermsAndConditions";
import { PageNotFound } from "../../pages/404/404";
import { About } from "../../pages/about/About";
import { Contact } from "../../pages/contact/Contact";
import { Catalog } from "../../pages/catalog/Catalog";
import { CarDetails } from "../../pages/car-details/CarDetails";
import { Profile } from "../../pages/profile/Profile";
import { Login } from "../../pages/login/Login";
import { Register } from "../../pages/register/Register";
import { Administration } from "../../pages/administration/Administration";
import { TestingPage } from "../../testing-page/TestingPage";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRoute } from "./AuthRoute";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Catalog />} />
      <Route path="/cars/:carModel" element={<CarDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<AuthRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="/administration" element={<Administration />} />
      {/* </Route> */}
      <Route path="*" element={<PageNotFound />} />

      <Route path="/testing-page" element={<TestingPage />} />
    </Routes>
  );
};
