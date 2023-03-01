import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <p>
        Dont have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};
