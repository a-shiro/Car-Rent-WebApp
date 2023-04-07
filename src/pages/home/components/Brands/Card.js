import styles from "./Brands.module.css";

export const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <img
        className={styles.CardImage}
        src={data.imgUrl}
        alt={`${data.name}-logo`}
      />
    </div>
  );
};
