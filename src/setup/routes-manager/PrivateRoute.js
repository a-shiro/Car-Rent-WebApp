import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  return user.isAdmin ? <Outlet /> : <Navigate to="*" />;
};
