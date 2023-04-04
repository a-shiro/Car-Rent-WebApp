import { useContext } from "react";
import { deleteDataById } from "../../../../../../../services/queries";
import { CarsContext } from "../../../../../Administration";
import { getData } from "../../../../../../../services/queries";
import styles from "../../../../../Administration.module.css";

export const DeleteButton = ({ id }) => {
  const [carsList, setCarsList] = useContext(CarsContext);

  const deleteCar = async () => {
    await deleteDataById("cars", id);

    const data = await getData("cars");
    setCarsList(data);
  };

  return (
    <button className={styles.DeleteButton} onClick={deleteCar}>
      Delete
    </button>
  );
};
