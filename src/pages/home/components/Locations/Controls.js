import styles from "./Locations.module.css";
import commonStyles from "../../Home.module.css";

export const Controls = ({
  citiesActive,
  setCitiesActive,
  countriesActive,
  setCountriesActive,
}) => {
  const onClickHandler = (e) => {
    if (!e.target.className.includes("Active")) {
      setCitiesActive(!citiesActive);
      setCountriesActive(!countriesActive);
    }
  };

  return (
    <div className={styles.ButtonsContainer}>
      <button
        id="citiesButton"
        onClick={onClickHandler}
        className={`${commonStyles.Button} ${
          citiesActive ? styles.Active : ""
        }`}
      >
        Cities
      </button>
      <button
        id="countryButton"
        onClick={onClickHandler}
        className={`${commonStyles.Button} ${
          countriesActive ? styles.Active : ""
        }`}
      >
        Countries
      </button>
    </div>
  );
};
