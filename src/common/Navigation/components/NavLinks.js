import { Link } from "react-router-dom";
import { useSignOut } from "../../../pages/sign-in/hooks/useSignOut";
import styles from "../Navigation.module.css";

export const NavLinks = () => {
  const [signOut] = useSignOut();

  const userActive = localStorage.getItem("userActive");

  return (
    <ul className={styles.NavLinks}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cars">Cars</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contacts</Link>
      </li>
      <li>
        <Link to={userActive ? "/profile" : "/sign-in"}>Profile</Link>
      </li>
      {userActive && (
        <li>
          <button onClick={signOut}>Sign Out</button>
        </li>
      )}
      <li>
        <Link to="/testing-page">Testing</Link>
      </li>
    </ul>
  );
};
