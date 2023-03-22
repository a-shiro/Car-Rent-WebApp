import { Card } from "./Card";
import { Controls } from "./Controls";
import styles from "./Locations.module.css";

export const Locations = () => {
  return (
    <section className={styles.LocationsSection} id="locations">
      <header className={styles.Header}>
        <h1>- Locations -</h1>
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

      <Controls />
    </section>
  );
};
