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
      {dataList.length > 0 ? (
        <Fragment>
          {dataList.map((car) => {
            return (
              <Fragment key={car.id}>
                {!skeletonVisible ? (
                  <Link to={`${car.urlPath}`}>
                    <div className="card-catalog">
                      <div className="card-checkers"></div>
                      <span>
                        {car.brand} {car.model}
                      </span>
                      <span>starting at {car.price}$</span>
                      <img src={car.thumbnail} alt="car-thumbnail" />
                    </div>
                  </Link>
                ) : (
                  <CardSkeleton />
                )}
              </Fragment>
            );
          })}
        </Fragment>
      ) : (
        <h1>Unfortunately, no cars were found for the specified filter.</h1>
      )}
    </div>
  );
};
