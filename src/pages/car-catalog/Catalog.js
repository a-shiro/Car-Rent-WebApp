import { CarList } from "./components/CarList";
import { AsideFilters } from "./components/AsideFilters/AsideFilters";
import styles from "./Catalog.module.css";

export const Catalog = () => {
  return (
    <main>
      <header className={styles.Header}>
        <h1 className={styles.HeaderTitle}>- Rent luxury cars -</h1>
        <h2 className={styles.HeaderSubTitle}>
          Choose a premium rental car around the world
        </h2>
      </header>
      <div className={styles.Container}>
        <AsideFilters />
        <CarList />
      </div>
    </main>
  );
};
