import { database } from "../../../../setup/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect, Fragment } from "react";
import { UpdateButton } from "./components/UpdateButton";
import { DeleteButton } from "./components/DeleteButton";

export const CollectionRow = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const queryCarList = async () => {
      try {
        const data = await getDocs(collection(database, "cars"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setCarList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    queryCarList();
  }, []);

  return (
    <Fragment>
      {carList.map((car) => (
        <Fragment key={car.id}>
          <tr>
            <td style={{ border: "1px solid" }}>{car.Brand}</td>
            <td style={{ border: "1px solid" }}>{car.Model}</td>
            <td style={{ border: "1px solid" }}>{car.Type}</td>
            <td style={{ border: "1px solid" }}>{car.Engine}</td>
            <td style={{ border: "1px solid" }}>{car.HP}</td>
            <td style={{ border: "1px solid" }}>{car.imgUrl}</td>
            <td style={{ border: "1px solid" }}>{car.pricePerDay}</td>
            <td style={{ border: "1px solid" }}>{car.topSpeed}</td>
            <td style={{ border: "1px solid" }}>{car.zeroToSixty}</td>
          </tr>
          <UpdateButton id={car.id} />
          <DeleteButton id={car.id} />
        </Fragment>
      ))}
    </Fragment>
  );
};
