import { UpdateButton } from "./components/UpdateButton";
import { DeleteButton } from "./components/DeleteButton";

export const TableBody = ({ carList }) => {
  return (
    <tbody>
      {carList.map((car) => (
        <tr key={car.id}>
          <td>{car.brand}</td>
          <td>{car.model}</td>
          <td>{car.type}</td>
          <td>{car.engine}</td>
          <td>{car.horsePower}</td>
          <td>{car.topSpeed}</td>
          <td>{car.zeroToSixty}</td>
          <td>{car.pricePerDay}</td>
          <td>{car.imgUrl}</td>
          <td>
            <UpdateButton id={car.id} />
            <DeleteButton id={car.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
