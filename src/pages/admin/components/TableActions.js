import { deleteDataById } from "../../../services/queries";

export const TableActions = ({ id, activeCollection }) => {
  const deleteDocument = () => {
    deleteDataById(activeCollection, id);
  };

  return (
    <td>
      <div className="actions-wrapper-admin">
        <button className="action-button-admin">Edit</button>
        <button onClick={deleteDocument} className="action-button-admin">
          Delete
        </button>
      </div>
    </td>
  );
};
