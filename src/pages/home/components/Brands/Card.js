import styles from "./Brands.module.css";

export const Card = () => {
  return (
    <div className={styles.Card}>
      <img
        className={styles.CardImage}
        src="https://1000logos.net/wp-content/uploads/2018/03/Honda-logo.png"
        alt="brand-logo"
      />
    </div>
  );
};
