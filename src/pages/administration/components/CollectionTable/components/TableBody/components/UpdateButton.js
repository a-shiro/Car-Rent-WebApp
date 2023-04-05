import { useContext } from "react";
import {
  DocumentContext,
  UpdateToggleContext,
} from "../../../../../Administration";
import { getDataById } from "../../../../../../../services/queries";
import styles from "../../../../../Administration.module.css";

export const UpdateButton = ({ id }) => {
  const [updateVisible, setUpdateVisible] = useContext(UpdateToggleContext);
  const setDocument = useContext(DocumentContext);

  const updateHandler = async () => {
    const data = await getDataById("cars", id);
    data.id = id;
    setDocument(data);
    setUpdateVisible(true);
  };

  return (
    <button className={styles.UpdateButton} onClick={updateHandler}>
      Update
    </button>
  );
};
