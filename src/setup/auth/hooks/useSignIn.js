import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/firebase";

export const useSignIn = () => {
  const navigate = useNavigate();

  const signIn = async (event, type, data) => {
    event.preventDefault();

    const signInOptions = {
      emailAndPassword: signInWithEmailAndPassword,
      google: signInWithPopup,
    };

    try {
      await signInOptions[type](auth, ...data);
      localStorage.setItem("currentUserId", auth.currentUser.uid);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return [signIn];
};
