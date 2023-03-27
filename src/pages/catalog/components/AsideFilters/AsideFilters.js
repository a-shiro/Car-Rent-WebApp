import { SelectDropdown } from "./components/SelectDropdown";
import styles from "../../Catalog.module.css";

export const AsideFilters = () => {
  const carTypes = [
    "All cars",
    "Convertible",
    "SUV",
    "Sports Car",
    "Hyper Car",
    "Luxury Sedan",
  ];

  // ToDo: replace carBrands array with query from database
  const carBrands = [
    "Lamborghini",
    "Ferrari",
    "Pagani",
    "Bugatti",
    "McLaren",
    "Aston Martin",
    "Porsche",
    "Rolls Royce",
    "Mercedes-Benz",
  ];

  return (
    <aside>
      <div className={styles.BackgroundContainer}>
        <div className={styles.FilterContainer}>
          <p className={styles.AsideTitle}>Car Type</p>
          <SelectDropdown options={carTypes} />
        </div>
        <div className={styles.FilterContainer}>
          <p className={styles.AsideTitle}>Brand</p>
          <SelectDropdown options={carBrands} />
          {/* ToDo: add a brands collection to the database and
           query a brand element here to display all brands */}
        </div>
        <div className={styles.FilterContainer}>
          <p className={styles.AsideTitle}>Price range</p>
          <input
            className={styles.AsideInput}
            name="priceRangeFrom"
            type="number"
            placeholder="from $"
          />
          <input
            className={styles.AsideInput}
            name="priceRangeTo"
            type="number"
            placeholder="to $"
          />
        </div>
      </div>
    </aside>
  );
};
