import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignIn } from "./hooks/useSignIn";

export const SignIn = () => {
  const [signInWithEmailAndPassword, signInWithGoogle] = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInWithEmailAndPassword = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  const onSignInWithGoogle = () => {
    signInWithGoogle();
  };

  return (
    <div>
      <h1>Welcome! Please sign in.</h1>

      <form onSubmit={onSignInWithEmailAndPassword}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Sign in</button>
      </form>

      <button onClick={onSignInWithGoogle}>Sign in with Google</button>

      <p>
        Dont have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};
