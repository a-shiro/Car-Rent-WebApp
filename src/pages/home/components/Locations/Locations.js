import { Fragment, useEffect, useState } from "react";
import { Card } from "./Card";
import { getData } from "../../../../services/queries";
import "./Locations.css";
import leftWorldMap from "../../../../assets/images/left-world-map-vector.png";
import middleWorldMap from "../../../../assets/images/middle-world-map-vector.png";
import rightWorldMap from "../../../../assets/images/right-world-map-vector.png";

export const Locations = () => {
  const [countriesSelected, setCountriesSelected] = useState(true);
  const [citiesList, setCitiesList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const queryLocations = async () => {
      const cities = await getData("cities");
      const countries = await getData("countries");

      setCitiesList(cities);
      setCountriesList(countries);
    };

    queryLocations();
  }, []);

  const toggleHandler = (e) => {
    const [countriesButton, citiesButton] = e.target.parentElement.children;

    if (!e.target.classList.contains("selected")) {
      countriesButton.classList.toggle("selected");
      citiesButton.classList.toggle("selected");

      setCountriesSelected(!countriesSelected);
    }
  };

  return (
    <section className="location-section">
      <img
        className="background-image-left"
        src={leftWorldMap}
        alt="background-image"
      />
      <img
        className="background-image-middle"
        src={middleWorldMap}
        alt="background-image"
      />
      <img
        className="background-image-right"
        src={rightWorldMap}
        alt="background-image"
      />

      <div>
        <h1>Select Place</h1>

        <div className="controls-wrapper">
          <button className="toggler-button selected" onClick={toggleHandler}>
            Countries
          </button>
          <button className="toggler-button" onClick={toggleHandler}>
            Cities
          </button>
        </div>

        <div className="location-card-wrapper">
          {countriesSelected ? (
            <Fragment>
              {countriesList.map((country) => (
                <Card data={country} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {citiesList.map((city) => (
                <Card data={city} />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};
