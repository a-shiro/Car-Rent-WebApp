import { Outlet, Navigate } from "react-router-dom";

export const AuthRoute = () => {
  const userId = localStorage.getItem("currentUserId");
  const isUserAnnonymous = userId === null ? true : false;

  return isUserAnnonymous ? <Navigate to="/login" /> : <Outlet />;
};
