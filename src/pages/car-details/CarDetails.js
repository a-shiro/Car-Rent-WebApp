import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CarDescription } from "./CarDescription";
import { RentalConditions } from "./RentalConditions";
import { fetchDataWhere } from "../../services/queries";
import styles from "./CarDetails.module.css";

export const CarDetails = () => {
  const { carModel } = useParams();
  const [car, setCar] = useState({});
  const [descriptionActive, setDescriptionActive] = useState(true);
  const [conditionsActive, setConditionsActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataWhere("cars", {
        fieldName: "path",
        operator: "==",
        fieldValue: carModel,
      });

      setCar(data);
    };

    fetchData();
  }, []);

  const onClickHandler = (e) => {
    if (!e.target.className.includes("Active")) {
      setDescriptionActive(!descriptionActive);
      setConditionsActive(!conditionsActive);
    }
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>
        - Rent a {car?.brand} {car?.model} -
      </h1>
      <div className={styles.DetailsCard}>
        <div className={styles.ImageContainer}>
          <img src={car?.imgUrl} className={styles.CardImage} />
        </div>

        <div className={styles.Details}>
          <div className={styles.DetailsTitleContainer}>
            <h2 className={styles.DetailsTitle}>
              from <span>{car?.pricePerDay}$</span> per day
            </h2>
            <p>Minimum rental period is 2 days.</p>
          </div>

          <div className={styles.DetailsInfoContainer}>
            <h2 className={styles.DetailsTitle}>Car specifications</h2>
            <p>
              - Engine: <span>{car?.engine}</span>
            </p>
            <p>
              - Horse power: <span>{car?.horsePower}</span>
            </p>
            <p>
              - 0-100 km/h: <span>{car?.zeroToSixty}s</span>
            </p>
            <p>
              - Top speed: <span>{car?.topSpeed} km/h</span>
            </p>
          </div>

          <button className={styles.Button}>Rent now</button>
        </div>
      </div>

      <div className={styles.ButtonsContainer}>
        <button
          onClick={onClickHandler}
          className={`${styles.ToggleButton} ${
            descriptionActive ? styles.Active : ""
          }`}
        >
          Description
        </button>
        <button
          onClick={onClickHandler}
          className={`${styles.ToggleButton} ${
            conditionsActive ? styles.Active : ""
          }`}
        >
          Rental conditions
        </button>
      </div>

      {descriptionActive ? <CarDescription car={car} /> : <RentalConditions />}
    </div>
  );
};
