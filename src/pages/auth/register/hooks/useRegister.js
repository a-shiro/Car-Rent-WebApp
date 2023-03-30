import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../setup/config/firebase";
import { errorList } from "../utils/errors";

export const useRegister = () => {
  const navigate = useNavigate();

  const register = async (formValues, setError) => {
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
      console.error(err.message);
      const errorObj = errorList.find((x) => x.code === err.code);
      setError(errorObj.type, {
        type: errorObj.type,
        message: errorObj.message,
      });
    }
  };

  return [register];
};
