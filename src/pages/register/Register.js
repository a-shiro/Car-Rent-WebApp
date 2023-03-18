import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "./hooks/useRegister";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Register.module.css";

export const Register = () => {
  const schema = yup.object().shape({
    displayName: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required(),
    email: yup.string().email().required("Please enter a valid email address"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "The passwords don't match")
      .required("Please confirm your password"),
  });

  const {
    register: registerValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [register] = useRegister();

  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e) => {
    const fieldName = e.target.name;
    setFormValues({ ...formValues, [fieldName]: e.target.value });
  };

  const onRegisterHandler = (data) => {
    register(data);
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(onRegisterHandler)}>
        <input
          {...registerValue("displayName")}
          className={`${styles.inputFields} ${
            errors.displayName?.message && styles.errorInput
          }`}
          name="displayName"
          value={formValues.displayName}
          onChange={onChangeHandler}
          placeholder="Username"
          type="text"
        />
        {errors.displayName?.message && (
          <p className={styles.errorMessage}>{errors.displayName?.message}</p>
        )}
        <input
          {...registerValue("email")}
          className={`${styles.inputFields} ${
            errors.email?.message && styles.errorInput
          }`}
          name="email"
          value={formValues.email}
          onChange={onChangeHandler}
          placeholder="Email"
          type="email"
        />
        {errors.email?.message && (
          <p className={styles.errorMessage}>{errors.email?.message}</p>
        )}
        <input
          {...registerValue("password")}
          className={`${styles.inputFields} ${
            errors.password?.message && styles.errorInput
          }`}
          name="password"
          value={formValues.password}
          onChange={onChangeHandler}
          placeholder="Password"
          type="password"
        />
        {errors.password?.message && (
          <p className={styles.errorMessage}>{errors.password?.message}</p>
        )}
        <input
          {...registerValue("confirmPassword")}
          className={`${styles.inputFields} ${
            errors.confirmPassword?.message && styles.errorInput
          }`}
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={onChangeHandler}
          placeholder="Confirm Password"
          type="password"
        />
        {errors.confirmPassword?.message && (
          <p className={styles.errorMessage}>
            {errors.confirmPassword?.message}
          </p>
        )}
        <button>Register</button>
      </form>

      <p>
        Have an account already? <Link to="/login">Login here.</Link>
      </p>
    </div>
  );
};
