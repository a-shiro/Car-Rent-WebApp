import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import vector from "../../../assets/images/car-vector.png";

export const Featured = () => {
  return (
    <section className={styles.headingSection} id="featured">
      <img className={styles.coverImg} src={vector} />
      <div className={styles.headingBox}>
        <div>
          <h1 className={styles.title}>Welcome to RentX</h1>
          <p className={styles.secondaryTitle}>
            Pick and choose from the finest cars all around the globe.
          </p>
        </div>
        <div className={styles.controls}>
          <Link to="/cars">Browse cars</Link>
          <Link to="/about">About us</Link>
        </div>
      </div>
    </section>
  );
};
