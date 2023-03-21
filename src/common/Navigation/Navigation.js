import { NavLinks } from "./components/NavLinks";
import { NavBrand } from "./components/NavBrand";
import styles from "./Navigation.module.css";

export const Nav = () => {
  return (
    <nav className={styles.Navbar}>
      <NavBrand />
      <NavLinks />
    </nav>
  );
};
