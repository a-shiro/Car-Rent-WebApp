import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

export const PrivateRoute = () => {
  const [user, setUser] = useContext(UserContext);

  return user.isAdmin ? <Outlet /> : <Navigate to="*" />;
};
