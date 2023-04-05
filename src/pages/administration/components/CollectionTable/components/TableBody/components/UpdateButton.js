import { useContext } from "react";
import { DocumentContext, ToggleEdit } from "../../../../../Administration";
import { getDataById } from "../../../../../../../services/queries";
import styles from "../../../../../Administration.module.css";

export const UpdateButton = ({ id }) => {
  const [toggleEdit, setToggleEdit] = useContext(ToggleEdit);
  const setDocument = useContext(DocumentContext);

  const updateHandler = async () => {
    const data = await getDataById("cars", id);
    data.id = id;
    setDocument(data);
    setToggleEdit(!toggleEdit);
  };

  return (
    <button className={styles.UpdateButton} onClick={updateHandler}>
      Update
    </button>
  );
};
