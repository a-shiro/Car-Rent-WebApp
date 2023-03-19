import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignIn } from "./hooks/useSignIn";

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
      <h1>Welcome! Please sign in.</h1>

      <form onSubmit={handleSubmit(onSignInWithEmailAndPassword)}>
        <input
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
          {...register("password")}
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            clearErrors();
          }}
        />
        <button>Sign in</button>
        {errors.email?.message && <h1>{errors.email.message}</h1>}
        {errors.password?.message && <h1>{errors.password.message}</h1>}
        {errors.general?.message && <h1>{errors.general.message}</h1>}
      </form>

      <button onClick={onSignInWithGoogle}>Sign in with Google</button>

      <p>
        Dont have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};
