import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, database } from "../../setup/config/firebase";

export const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const collectionRef = collection(database, "users");
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const fieldName = e.target.name;
    setFormValues({ ...formValues, [fieldName]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
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
        phoneNumber: "",
        uid: auth.currentUser.uid,
        isAdmin: false,
      });

      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={onSubmitHandler}>
        <input
          name="firstName"
          value={formValues.firstName}
          onChange={onChangeHandler}
          placeholder="First Name"
          type="text"
          required
        />
        <input
          name="lastName"
          value={formValues.lastName}
          onChange={onChangeHandler}
          placeholder="Last Name"
          type="text"
          required
        />
        <input
          name="email"
          value={formValues.email}
          onChange={onChangeHandler}
          placeholder="Email"
          type="email"
          required
        />
        <input
          name="password"
          value={formValues.password}
          onChange={onChangeHandler}
          placeholder="Password"
          type="password"
          required
        />
        <input
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={onChangeHandler}
          placeholder="Confirm Password"
          type="password"
          required
        />
        <button>Register</button>
      </form>

      <p>
        Have an account already? <Link to="/login">Login here.</Link>
      </p>
    </div>
  );
};
