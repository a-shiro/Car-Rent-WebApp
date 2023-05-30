import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../../services/queries";
import "../Catalog.css";

export const CarList = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const queryCarList = async () => {
      const data = await getData("cars");
      setCarList(data);
    };

    queryCarList();
  }, []);

  return (
    <div className="catalog-card-wrapper">
      {carList.map((car) => {
        return (
          <Link to={`${car.path}`} key={car.id}>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>
              <span className="catalog-card-title">
                {car.brand} {car.model}
              </span>
              <span className="catalog-card-price">
                starting at {car.pricePerDay}$
              </span>
              <img
                className="catalog-card-image"
                src={car.sideImgUrl}
                alt="car-side-image"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
