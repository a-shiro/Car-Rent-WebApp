import { useState, createContext } from "react";
import { CollectionTable } from "./components/CollectionTable/CollectionTable";
import { CreateForm } from "./components/CreateForm";
import styles from "./Administration.module.css";
import commonStyles from "../../common/Styles.module.css";

export const CarsContext = createContext();

export const Administration = () => {
  const [carList, setCarList] = useState([]);

  return (
    <CarsContext.Provider value={[carList, setCarList]}>
      <main className={commonStyles.Main}>
        <h1 className={`${styles.Heading} ${commonStyles.Font400}`}>
          - Admin panel -
        </h1>
        <div
          className={`${commonStyles.FlexContainer} ${styles.TableContainer}`}
        >
          <CreateForm />
          <CollectionTable />
        </div>
      </main>
    </CarsContext.Provider>
  );
};
