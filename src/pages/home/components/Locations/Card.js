import styles from "./Locations.module.css";

export const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardTitleContainer}>
        <span className={styles.CardText}>{data.name}</span>
      </div>
      <img
        className={styles.CardImage}
        src={data.imgUrl}
        alt={`${data.name}-image`}
      />
    </div>
  );
};
