import { deleteDoc, doc } from "firebase/firestore";
import { database } from "../../../../../setup/config/firebase";

export const DeleteButton = (props) => {
  const deleteCar = async () => {
    const carDoc = doc(database, "cars", props.id);
    await deleteDoc(carDoc);
  };

  return <button onClick={deleteCar}>Delete</button>;
};
