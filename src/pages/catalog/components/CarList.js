import { database } from "../../../setup/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Catalog.module.css";

export const CarList = () => {
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
    <div className={styles.CarList}>
      {carList.map((car) => (
        <div className={styles.Card} key={car.id}>
          <Link to={`${car.path}`}>
            <span className={styles.CardText}>
              {car.brand}
              <span className={styles.CardModel}>&nbsp;{car.model}</span>
            </span>
            <span className={styles.CardPrice}>from {car.pricePerDay}$</span>
            <img
              className={styles.CardImage}
              src={car.imgUrl}
              alt={car.model}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
