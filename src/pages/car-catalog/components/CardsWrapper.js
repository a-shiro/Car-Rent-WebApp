import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { CardSkeleton } from "./CardSkeleton";
import "../Catalog.css";

export const CardsWrapper = ({ dataList }) => {
  const [skeletonVisible, setSkeletonVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkeletonVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cards-wrapper-catalog">
      {!skeletonVisible ? (
        <Fragment>
          {dataList.length > 0 ? (
            <Fragment>
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
            </Fragment>
          ) : (
            <h1>Unfortunately, no cars were found for the specified filter.</h1>
          )}
        </Fragment>
      ) : (
        <CardSkeleton />
      )}
    </div>
  );
};
