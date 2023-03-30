import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignIn } from "./hooks/useSignIn";
import styles from "./SignIn.module.css";
import commonStyles from "../../../common/Styles.module.css";
import { ErrorMessage } from "./ErrorMessage";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, signInWithGoogle] = useSignIn();

  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSignInWithEmailAndPassword = (data) => {
    signInWithEmailAndPassword(data, setError);
  };

  const onSignInWithGoogle = () => {
    signInWithGoogle(setError);
  };

  return (
    <main className={commonStyles.Main}>
      <h1 className={`${styles.Heading} ${commonStyles.Font400}`}>
        - Sign in -
      </h1>
      <div className={`${commonStyles.FlexContainer} ${commonStyles.Column}`}>
        <div className={styles.FormCard}>
          <form
            className={styles.Form}
            onSubmit={handleSubmit(onSignInWithEmailAndPassword)}
          >
            <input
              className={`${styles.InputFields} ${
                errors.email?.message && styles.ErrorInput
              }`}
              {...register("email")}
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                clearErrors();
              }}
            />
            <input
              className={`${styles.InputFields} ${
                errors.password?.message && styles.ErrorInput
              }`}
              {...register("password")}
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                clearErrors();
              }}
            />
            {Object.keys(errors).length !== 0 && (
              <ErrorMessage error={errors} />
            )}
            <button
              className={`${commonStyles.ButtonBrown} ${styles.FormButton}`}
            >
              Sign in
            </button>
          </form>
          <div
            className={`${commonStyles.FlexContainer} ${commonStyles.Column}`}
          >
            <button
              className={`${commonStyles.ButtonBrown} ${styles.FormButton}`}
              onClick={onSignInWithGoogle}
            >
              Sign in with Google
            </button>
            <p className={styles.RegisterParagraph}>
              Don't have an account?&nbsp;
              <Link to="/register">Register here.</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
