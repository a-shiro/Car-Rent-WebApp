import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { getData } from "../../../../services/queries";
import "./PopularChoices.css";
import "../../../../App.css";

const PopularChoices = () => {
  //  ToDo: add query for the top 8 rented cars in this page
  // ToDo: add carousel slider for the cards

  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const queryCarList = async () => {
      const data = await getData("cars", 4);
      setCarList(data);
    };

    queryCarList();
  }, []);

  return (
    <section className="popular-section">
      <div>
        <div className="checker-pattern"></div>

        <h1>Popular Choices</h1>
        <div className="card-wrapper">
          {carList.map((car, index) => (
            <Card carData={car} index={index} key={car.id} />
          ))}
        </div>
        <Link to="/cars" className="cta-button">
          All cars
        </Link>
      </div>
    </section>
  );
};

export default PopularChoices;
