import { auth } from "../../setup/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1>Welcome! Please sign in.</h1>
      <form onClick={signIn}>
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

      <p>
        Dont have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};
