import { auth } from "../../setup/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <h1>Welcome! Please sign in.</h1>
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
      <button onClick={logIn}>Sign in</button>

      <p>
        Dont have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};
