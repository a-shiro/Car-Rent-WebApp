import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { TermsAndConditions } from "../../pages/tac/TermsAndConditions";
import { PageNotFound } from "../../pages/404/404";
import { About } from "../../pages/about/About";
import { Contacts } from "../../pages/contacts/Contacts";
import { Catalog } from "../../pages/catalog/Catalog";
import { CarDetails } from "../../pages/car-details/CarDetails";
import { Profile } from "../../pages/profile/Profile";
import { SignIn } from "../../pages/sign-in/SignIn";
import { Register } from "../../pages/register/Register";
import { Administration } from "../../pages/administration/Administration";
import { TestingPage } from "../../testing-page/TestingPage";
import { AuthRoute } from "./AuthRoute";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Catalog />} />
      <Route path="/cars/:carModel" element={<CarDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route element={<AuthRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
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
