import { auth, provider } from "../../setup/config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUserId", auth.currentUser.uid);

      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    localStorage.setItem("currentUserId", auth.currentUser.uid);

    navigate("/");
  };

  return (
    <div>
      <h1>Welcome! Please sign in.</h1>

      <form onSubmit={signIn}>
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

      <button onClick={signInWithGoogle}>Sign in with Google</button>

      <p>
        Dont have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};
