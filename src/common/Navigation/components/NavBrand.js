import { Link } from "react-router-dom";
import styles from "../Navigation.module.css";

export const NavBrand = () => {
  return (
    <Link to="/" className={styles.NavBrand}>
      RentX
    </Link>
  );
};
