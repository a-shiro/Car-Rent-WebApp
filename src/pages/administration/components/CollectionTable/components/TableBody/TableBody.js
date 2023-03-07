import { UpdateButton } from "./components/UpdateButton";
import { DeleteButton } from "./components/DeleteButton";

export const TableBody = ({ carList }) => {
  return (
    <tbody>
      {carList.map((car) => (
        <tr key={car.id}>
          {Object.keys(car).map((key) => (
            <td key={key} style={{ border: "1px solid" }}>
              {car[key]}
            </td>
          ))}
          <td>
            <UpdateButton id={car.id} />
            <DeleteButton id={car.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
