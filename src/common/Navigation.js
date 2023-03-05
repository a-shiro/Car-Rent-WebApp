import { Link, useNavigate } from "react-router-dom";
import { auth } from "../setup/config/firebase";
import { signOut } from "firebase/auth";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*"
        height="100px"
        width="150px"
      />
      <div style={{ display: "inline-block" }}>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contacts</Link>
        <Link to={auth?.currentUser ? "/profile" : "/login"}>Profile</Link>
        <button
          onClick={async () => {
            await signOut(auth);
            navigate("/");
          }}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};
