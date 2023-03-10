import { database } from "../../../../../setup/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

export const CarPreview = () => {
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
        <Link to={`/cars/${car.path}`} key={car.id}>
          <img src={car.imgUrl} width="400px" />
          <p>
            {car.brand} {car.model}
          </p>
          <p>from {car.pricePerDay} $</p>
        </Link>
      ))}
    </Fragment>
  );
};
