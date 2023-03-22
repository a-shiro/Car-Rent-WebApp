import { Card } from "./Card";
import styles from "./Brands.module.css";

export const Brands = () => {
  return (
    <section className={styles.BrandsSection}>
      <header className={styles.Header}>
        <h1>- Brands -</h1>
      </header>
      <div className={styles.CardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
