import { Link } from "react-router-dom";
import styles from "./PopularChoices.module.css";

export const Card = ({ car }) => {
  return (
    <div className={styles.Card} key={car.id}>
      <Link to={`cars/${car.path}`}>
        <img
          className={styles.CardImage}
          src={car.sideImgUrl}
          alt={car.model}
        />
        <span className={styles.CardText}>
          {car.brand} {car.model}
        </span>
      </Link>
    </div>
  );
};
