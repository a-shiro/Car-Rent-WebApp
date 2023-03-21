import { Link } from "react-router-dom";
import styles from "../Featured/Featured.module.css";
import vector from "../../../../assets/images/car-vector.png";

export const Featured = () => {
  return (
    <section className={styles.FeaturedSection}>
      <img className={styles.HeadingImage} src={vector} />
      <div className={styles.HeadingContainer}>
        <header>
          <h1 className={styles.HeadingTitle}>Welcome to RentX</h1>
          <span className={styles.HeadingSubTitle}>
            Pick and choose from the finest cars all around the globe
          </span>
        </header>
        <div className={styles.ButtonsContainer}>
          <Link to="/cars">Browse cars</Link>
          <Link to="/about">About us</Link>
        </div>
      </div>
    </section>
  );
};
