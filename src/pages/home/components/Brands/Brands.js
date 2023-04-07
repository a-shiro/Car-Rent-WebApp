import { Card } from "./Card";
import styles from "./Brands.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../../../services/queries";

export const Brands = () => {
  const [brandsList, setBrandsList] = useState([]);

  useEffect(() => {
    const queryBrands = async () => {
      const brands = await getData("brands");

      setBrandsList(brands);
    };

    queryBrands();
  }, []);

  return (
    <section className={styles.BrandsSection}>
      <header className={styles.Header}>
        <h1>- Brands -</h1>
      </header>
      <div className={styles.CardsContainer}>
        {brandsList.map((brand) => (
          <Card key={brand.id} data={brand} />
        ))}
      </div>
    </section>
  );
};
