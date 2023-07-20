import { Fragment, useEffect, useState } from "react";
import { Card } from "./Card";
import { getData } from "../../../../services/queries";
import leftWorldMap from "../../../../assets/images/left-world-map-vector.png";
import middleWorldMap from "../../../../assets/images/middle-world-map-vector.png";
import rightWorldMap from "../../../../assets/images/right-world-map-vector.png";
import "./Locations.css";
import { CardSkeleton } from "./CardSkeleton";

const Locations = () => {
  const [countriesSelected, setCountriesSelected] = useState(true);
  const [citiesList, setCitiesList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [skeletonVisible, setSkeletonVisible] = useState(true);

  useEffect(() => {
    const queryLocations = async () => {
      const cities = await getData("cities");
      const countries = await getData("countries");

      setCitiesList(cities);
      setCountriesList(countries);
    };

    if (citiesList.length === 0) {
      queryLocations();
    }

    const timer = setTimeout(() => {
      setSkeletonVisible(false);
    }, 800);

    return () => clearTimeout(timer);
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
    <section className="section-locations">
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

        <div className="controls-wrapper-locations">
          <button className="button-locations selected" onClick={toggleHandler}>
            Countries
          </button>
          <button className="button-locations" onClick={toggleHandler}>
            Cities
          </button>
        </div>

        {skeletonVisible ? (
          <div className="card-wrapper-locations">
            {[...Array(12)].map((x, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="card-wrapper-locations">
            {countriesSelected ? (
              <Fragment>
                {countriesList.map((country) => (
                  <Card data={country} key={country.id} />
                ))}
              </Fragment>
            ) : (
              <Fragment>
                {citiesList.map((city) => (
                  <Card data={city} key={city.id} />
                ))}
              </Fragment>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Locations;
