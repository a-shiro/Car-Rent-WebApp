import { useState, useEffect } from "react";
import { getData } from "../../services/queries";
import { CollectionTable } from "./components/CollectionTable/CollectionTable";
import { CreateForm } from "./components/CreateForm";
import styles from "./Administration.module.css";
import commonStyles from "../../common/Styles.module.css";

export const Administration = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const queryCarList = async () => {
      const data = await getData("cars");

      setCarList(data);
    };

    queryCarList();
  }, []);

  return (
    <main className={commonStyles.Main}>
      <h1 className={`${styles.Heading} ${commonStyles.Font400}`}>
        - Admin panel -
      </h1>
      <div className={`${commonStyles.FlexContainer} ${styles.TableContainer}`}>
        <CreateForm />
        <CollectionTable carList={carList} />
      </div>
    </main>
  );
};
