import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../setup/config/firebase";

export const useRegister = () => {
  const navigate = useNavigate();

  const register = async (formValues) => {
    try {
      // Creates user in Firebase auth
      await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );

      // Sets KVPs in the local storage for later use
      localStorage.setItem("userActive", true);

      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return [register];
};
