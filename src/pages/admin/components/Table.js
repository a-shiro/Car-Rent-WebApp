import { TableActions } from "./TableActions";

export const Table = ({ data, activeCollection }) => {
  return (
    <table className="table-admin">
      <thead>
        <tr>
          <th>Actions</th>
        </tr>
        {data?.length > 0 &&
          Object.keys(data[0]).map((x) => {
            return (
              <tr key={x}>
                <th>{x}</th>
              </tr>
            );
          })}
      </thead>

      <tbody>
        {data?.length > 0 &&
          data.map((obj) => (
            <tr key={obj.id}>
              <TableActions id={obj.id} activeCollection={activeCollection} />
              {Object.values(obj).map((x) => (
                <td key={obj.id + Math.random()}>{`${x}`}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
