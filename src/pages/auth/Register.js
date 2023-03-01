import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />

        <button>Register</button>
      </form>
      <p>
        Have an account already? <Link to="/login">Login here.</Link>
      </p>
    </div>
  );
};
