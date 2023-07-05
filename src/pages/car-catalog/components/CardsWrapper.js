import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../../services/queries";
import "../Catalog.css";

export const CardsWrapper = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const queryCarList = async () => {
      const data = await getData("cars");
      setCarList(data);
    };

    queryCarList();
  }, []);

  return (
    <div className="cards-wrapper-catalog">
      {carList.map((car) => {
        return (
          <Link to={`${car.urlPath}`} key={car.id}>
            <div className="card-catalog">
              <div className="card-checkers"></div>
              <span>
                {car.brand} {car.model}
              </span>
              <span>starting at {car.price}$</span>
              <img src={car.thumbnail} alt="car-thumbnail" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
