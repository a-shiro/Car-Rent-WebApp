import { Link } from "react-router-dom";
import { useSignOut } from "../setup/auth/hooks/useSignOut";

export const Nav = () => {
  const [signOut] = useSignOut();

  const hasActiveUser =
    localStorage.getItem("currentUserId") !== null ? true : false;

  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*"
            alt=""
            height="100px"
            width="150px"
          />
        </Link>
        <ul>
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
            <Link to={hasActiveUser ? "/profile" : "/login"}>Profile</Link>
          </li>
          <li>
            <button onClick={signOut}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
