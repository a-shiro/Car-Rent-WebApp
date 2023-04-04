import { deleteDataById } from "../../../../../../../services/queries";
import styles from "../../../../../Administration.module.css";

export const DeleteButton = ({ id }) => {
  const deleteCar = async () => {
    await deleteDataById("cars", id);
  };

  return (
    <button className={styles.DeleteButton} onClick={deleteCar}>
      Delete
    </button>
  );
};
