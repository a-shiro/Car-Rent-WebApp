import { deleteDataById } from "../../../../../../../services/queries";

export const DeleteButton = ({ id }) => {
  const deleteCar = async () => {
    await deleteDataById("cars", id);
  };

  return <button onClick={deleteCar}>Delete</button>;
};
