import { useEffect, useContext } from "react";
import { CarsContext } from "../../Administration";
import { getData } from "../../../../services/queries";
import { TableBody } from "./components/TableBody/TableBody";
import { TableHead } from "./components/TableHead/TableHead";
import styles from "../../Administration.module.css";

export const CollectionTable = () => {
  const [carList, setCarList] = useContext(CarsContext);

  useEffect(() => {
    const queryCarList = async () => {
      const data = await getData("cars");
      setCarList(data);
    };

    queryCarList();
  }, []);

  return (
    <table className={styles.Table}>
      <TableHead />
      <TableBody carList={carList} />
    </table>
  );
};
