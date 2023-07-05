import { Link } from "react-router-dom";
import "../Catalog.css";

export const CardsWrapper = ({ dataList }) => {
  return (
    <div className="cards-wrapper-catalog">
      {dataList.map((car) => {
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
