import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, database } from "../../config/firebase";

export const useRegister = () => {
  const navigate = useNavigate();

  const collectionRef = collection(database, "users");

  const register = async (e, formValues) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      await addDoc(collectionRef, {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phoneNumber: "",
        uid: auth.currentUser.uid,
        isAdmin: false,
      });

      localStorage.setItem("currentUserId", auth.currentUser.uid);

      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return [register];
};
