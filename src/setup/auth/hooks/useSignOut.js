import { useNavigate } from "react-router-dom";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export const useSignOut = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    await firebaseSignOut(auth);
    localStorage.clear();
    navigate("/");
  };

  return [signOut];
};
