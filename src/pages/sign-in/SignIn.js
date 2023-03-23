import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignIn } from "./hooks/useSignIn";
import styles from "./SignIn.module.css";

export const SignIn = () => {
  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [signInWithEmailAndPassword, signInWithGoogle] = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInWithEmailAndPassword = (data) => {
    signInWithEmailAndPassword(data, setError);
  };

  const onSignInWithGoogle = () => {
    signInWithGoogle(setError);
  };

  return (
    <div>
      <header className={styles.Header}>
        <h1>- Sign in -</h1>
      </header>
      <div className={styles.FormCard}>
        <form onSubmit={handleSubmit(onSignInWithEmailAndPassword)}>
          <input
            className={`${styles.inputFields} ${
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
            className={`${styles.inputFields} ${
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
          {errors.email?.message && (
            <span className={styles.ErrorMessage}>{errors.email.message}</span>
          )}
          {errors.password?.message && (
            <span className={styles.ErrorMessage}>
              {errors.password.message}
            </span>
          )}
          {errors.general?.message && (
            <span className={styles.ErrorMessage}>
              {errors.general.message}
            </span>
          )}
          <div className={styles.SubmitContainer}>
            <button className={styles.Button}>Sign in</button>
            <button className={styles.Button} onClick={onSignInWithGoogle}>
              Sign in with Google
            </button>
            <p>
              Dont have an account? <Link to="/register">Register here.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
