import { provider } from "../../setup/config/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignIn } from "./hooks/useSignIn";

export const Login = () => {
  const [signIn] = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInHandler = (e, type, data) => {
    signIn(e, type, data);
  };

  return (
    <div>
      <h1>Welcome! Please sign in.</h1>

      <form
        onSubmit={(e) =>
          onSignInHandler(e, "emailAndPassword", [email, password])
        }
      >
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

      <button onClick={(e) => onSignInHandler(e, "google", [provider])}>
        Sign in with Google
      </button>

      <p>
        Dont have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};
