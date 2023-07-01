import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PopularChoices.css";

export const Card = ({ carData, index }) => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    switch (index) {
      case 1:
        setScreenSize("medium-screen");
        break;
      case 2:
        setScreenSize("large-screen");
        break;
      case 3:
        setScreenSize("xl-screen");
        break;
    }
  }, []);

  return (
    <Link
      to={`/cars/${carData.urlPath}`}
      className={`card ${screenSize}`}
      key={carData.id}
    >
      <div className="card-clip"></div>
      <div className="card-clip-2"></div>
      <div className="card-clip-3"></div>

      <span className="card-title">
        {carData.brand} {carData.model}
      </span>
      <img className="card-image" src={carData.thumbnail} alt="car-thumbnail" />
    </Link>
  );
};
