import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../../../setup/config/firebase";
import { errorList } from "../utils/errors";

export const useSignIn = () => {
  const navigate = useNavigate();

  const signInWithEmailAndPassword = async ({ email, password }, setError) => {
    try {
      await firebaseSignInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userActive", true);

      navigate("/");
    } catch (err) {
      console.error(err.message);
      const errorObj = errorList.find((x) => x.code === err.code);
      setError(errorObj.type, {
        type: errorObj.type,
        message: errorObj.message,
      });
    }
  };

  const signInWithGoogle = async (setError) => {
    try {
      await signInWithPopup(auth, provider);

      localStorage.setItem("userActive", true);

      navigate("/");
    } catch (err) {
      console.error(err.message);
      const errorObj = errorList.find((x) => x.code === err.code);
      setError(errorObj.type, {
        type: errorObj.type,
        message: errorObj.message,
      });
    }
  };

  return [signInWithEmailAndPassword, signInWithGoogle];
};
