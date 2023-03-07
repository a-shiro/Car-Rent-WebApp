import { deleteDoc, doc } from "firebase/firestore";
import { database } from "../../../../../../../setup/config/firebase";

export const DeleteButton = ({ id }) => {
  const deleteCar = async () => {
    try {
      const carDoc = doc(database, "cars", id);
      await deleteDoc(carDoc);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={deleteCar}>Delete</button>;
};
