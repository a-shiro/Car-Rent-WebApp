import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Controls } from "./Controls";
import styles from "./Locations.module.css";
import { getData } from "../../../../services/queries";

export const Locations = () => {
  const [citiesActive, setCitiesActive] = useState(true);
  const [countriesActive, setCountriesActive] = useState(false);
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

  return (
    <section className={styles.LocationsSection}>
      <header className={styles.Header}>
        <h1>- Select place -</h1>
      </header>

      <Controls
        citiesActive={citiesActive}
        setCitiesActive={setCitiesActive}
        countriesActive={countriesActive}
        setCountriesActive={setCountriesActive}
      />

      {citiesActive ? (
        <div className={styles.CardsContainer}>
          {citiesList.map((city) => (
            <Card key={city.id} data={city} />
          ))}
        </div>
      ) : (
        <div className={styles.CardsContainer}>
          {countriesList.map((country) => (
            <Card key={country.id} data={country} />
          ))}
        </div>
      )}
    </section>
  );
};
