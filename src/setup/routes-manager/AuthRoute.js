import { Outlet, Navigate } from "react-router-dom";

export const AuthRoute = () => {
  const userActive = localStorage.getItem("userActive");

  return userActive ? <Outlet /> : <Navigate to="/login" />;
};
