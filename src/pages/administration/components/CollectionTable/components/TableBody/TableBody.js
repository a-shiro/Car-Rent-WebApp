import { UpdateButton } from "./components/UpdateButton";
import { DeleteButton } from "./components/DeleteButton";

export const TableBody = ({ carList }) => {
  return (
    <tbody>
      {carList.map((car) => (
        <tr key={car.id}>
          <td style={{ border: "1px solid" }}>{car.id}</td>
          <td style={{ border: "1px solid" }}>{car.brand}</td>
          <td style={{ border: "1px solid" }}>{car.model}</td>
          <td style={{ border: "1px solid" }}>{car.type}</td>
          <td style={{ border: "1px solid" }}>{car.engine}</td>
          <td style={{ border: "1px solid" }}>{car.horsePower}</td>
          <td style={{ border: "1px solid" }}>{car.imgUrl}</td>
          <td style={{ border: "1px solid" }}>{car.pricePerDay}</td>
          <td style={{ border: "1px solid" }}>{car.topSpeed}</td>
          <td style={{ border: "1px solid" }}>{car.zeroToSixty}</td>
          <td style={{ display: "flex" }}>
            <UpdateButton id={car.id} />
            <DeleteButton id={car.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
