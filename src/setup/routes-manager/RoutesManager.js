import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import PageNotFound from "../../pages/404/404";
import About from "../../pages/about/About";
import Contacts from "../../pages/contacts/Contacts";
import Catalog from "../../pages/car-catalog/Catalog";
import Details from "../../pages/details/Details";
// import { Profile } from "../../pages/profile/Profile";
// import { SignIn } from "../../pages/auth/sign-in/SignIn";
// import { Register } from "../../pages/auth/register/Register";
// import { Administration } from "../../pages/administration/Administration";
import Admin from "../../pages/admin/Admin";
import DetailsRouteGuard from "./DetailsRouteGuard";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Catalog />} />
      <Route element={<DetailsRouteGuard />}>
        <Route path="/cars/:carModel" element={<Details />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      {/* <Route element={<AuthRoute />}> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* </Route> */}
      {/* <Route path="/sign-in" element={<SignIn />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="/admin" element={<Admin />} />
      {/* </Route> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
