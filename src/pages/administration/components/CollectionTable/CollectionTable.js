import { TableBody } from "./components/TableBody/TableBody";
import { TableHead } from "./components/TableHead/TableHead";
import styles from "../../Administration.module.css";

export const CollectionTable = ({ carList }) => {
  return (
    <table className={styles.Table}>
      <TableHead carList={carList} />
      <TableBody carList={carList} />
    </table>
  );
};
