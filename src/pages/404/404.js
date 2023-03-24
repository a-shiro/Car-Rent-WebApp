import { Link } from "react-router-dom";
import styles from "./404.module.css";
import vector from "../../assets/images/car-vector.png";

export const PageNotFound = () => {
  return (
    <div className={styles.MainContainer}>
      <header className={styles.Header}>
        <h1>- Page not found -</h1>
      </header>
      <div className={styles.Container}>
        <div>
          <p className={styles.Text}>
            Sorry, but the page you requested was not found.
          </p>
        </div>
        <div className={styles.ButtonsContainer}>
          <Link to="/" className={styles.Button}>
            Back Home
          </Link>
          <Link to="/cars" className={styles.Button}>
            Browse Cars
          </Link>
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <img src={vector} className={styles.VectorImage} />
      </div>
    </div>
  );
};
