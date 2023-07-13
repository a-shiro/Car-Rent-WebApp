export const TableActions = ({ id }) => {
  // Add on click funcs that work with id

  return (
    <td>
      <div className="actions-wrapper-admin">
        <button className="action-button-admin">Edit</button>
        <button className="action-button-admin">Delete</button>
      </div>
    </td>
  );
};
