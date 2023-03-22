import styles from "./Locations.module.css";

export const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardTitleContainer}>
        <span className={styles.CardText}>Location Name Placeholder</span>
      </div>
      <img
        className={styles.CardImage}
        src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
        alt="location"
      />
    </div>
  );
};
