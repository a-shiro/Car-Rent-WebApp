import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "./hooks/useRegister";

export const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [register] = useRegister();

  const onChangeHandler = (e) => {
    const fieldName = e.target.name;
    setFormValues({ ...formValues, [fieldName]: e.target.value });
  };

  const onRegisterHandler = (e) => {
    register(e, formValues);
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={onRegisterHandler}>
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
