import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../../setup/config/firebase";

export const useSignIn = () => {
  const navigate = useNavigate();

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await firebaseSignInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userActive", true);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      localStorage.setItem("userActive", true);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return [signInWithEmailAndPassword, signInWithGoogle];
};
