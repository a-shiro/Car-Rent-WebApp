import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "./hooks/useRegister";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Register.module.css";
import commonStyles from "../../../common/Styles.module.css";

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
    setError,
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
    register(data, setError);
  };

  return (
    <main className={commonStyles.Main}>
      <h1 className={`${styles.Heading} ${commonStyles.Font400}`}>
        - Register -
      </h1>
      <div className={`${commonStyles.FlexContainer} ${commonStyles.Column}`}>
        <div className={styles.FormCard}>
          <form
            className={styles.Form}
            onSubmit={handleSubmit(onRegisterHandler)}
          >
            <input
              {...registerValue("displayName")}
              className={`${styles.InputFields} ${
                errors.displayName?.message && styles.ErrorInput
              }`}
              name="displayName"
              value={formValues.displayName}
              onChange={onChangeHandler}
              placeholder="Username"
              type="text"
            />
            <input
              {...registerValue("email")}
              className={`${styles.InputFields} ${
                errors.email?.message && styles.ErrorInput
              }`}
              name="email"
              value={formValues.email}
              onChange={onChangeHandler}
              placeholder="Email"
              type="email"
            />
            <input
              {...registerValue("password")}
              className={`${styles.InputFields} ${
                errors.password?.message && styles.ErrorInput
              }`}
              name="password"
              value={formValues.password}
              onChange={onChangeHandler}
              placeholder="Password"
              type="password"
            />
            <input
              {...registerValue("confirmPassword")}
              className={`${styles.InputFields} ${
                errors.confirmPassword?.message && styles.ErrorInput
              }`}
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={onChangeHandler}
              placeholder="Confirm Password"
              type="password"
            />
            {errors.displayName?.message && (
              <p className={styles.ErrorMessage}>
                {errors.displayName?.message}
              </p>
            )}
            {errors.email?.message && (
              <p className={styles.ErrorMessage}>{errors.email?.message}</p>
            )}
            {errors.password?.message && (
              <p className={styles.ErrorMessage}>{errors.password?.message}</p>
            )}
            {errors.confirmPassword?.message && (
              <p className={styles.ErrorMessage}>
                {errors.confirmPassword?.message}
              </p>
            )}
            <div
              className={`${commonStyles.FlexContainer} ${commonStyles.Column}`}
            >
              <button
                className={`${commonStyles.ButtonBrown} ${styles.FormButton}`}
              >
                Register
              </button>
              <p className={styles.RegisterParagraph}>
                Have an account already?&nbsp;
                <Link to="/sign-in">Sign in here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
