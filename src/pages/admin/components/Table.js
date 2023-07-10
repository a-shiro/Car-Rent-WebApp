import { TableActions } from "./TableActions";

export const Table = ({ data }) => {
  return (
    <table className="table-admin">
      <thead>
        <tr>
          <th>Actions</th>
        </tr>
        {data &&
          Object.keys(data[0]).map((x) => {
            return (
              <tr key={x}>
                <th>{x}</th>
              </tr>
            );
          })}
      </thead>

      <tbody>
        {data &&
          data.map((obj) => (
            <tr key={obj.id}>
              <TableActions id={obj.id} />
              {Object.values(obj).map((x) => (
                <td key={obj.id + Math.random()}>{`${x}`}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
