import { Link } from "react-router-dom";
import { NavLinks } from "./components/NavLinks";
import styles from "./Navigation.module.css";

export const Nav = () => {
  return (
    <nav className={styles.NavBar}>
      <Link className={styles.NavBrand} to="/">
        RentX
      </Link>
      <NavLinks />
    </nav>
  );
};
