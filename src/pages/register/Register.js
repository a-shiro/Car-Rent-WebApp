import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../setup/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={registerUser}>
        <input
          type="text"
          required
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button>Register</button>
      </form>

      <p>
        Have an account already? <Link to="/login">Login here.</Link>
      </p>
    </div>
  );
};
