import styles from "./Contacts.module.css";
import vector from "../../assets/images/car-vector.png";

export const Contacts = () => {
  return (
    <div className={styles.MainContainer}>
      <header className={styles.Header}>
        <h1>- Our Contacts -</h1>
      </header>
      <div className={styles.Container}>
        <div>
          <div className={styles.PhoneInfoContainer}>
            <p className={styles.TitleText}>Phone</p>
            <p> +359 88 888 8888</p>
          </div>
          <div>
            <p className={styles.TitleText}>Email </p>
            <p>rentx@email.com</p>
          </div>
        </div>
        <div>
          <p className={styles.TitleText}>Office address (Main)</p>
          <p>California, San Francisco</p>
          <p>94016</p>
          <p>We work 24/7</p>
        </div>
        <div>
          <p className={styles.TitleText}>Office address (Secondary)</p>
          <p>Nevada, Las Vegas</p>
          <p>88901</p>
          <p>We work 24/7</p>
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <img src={vector} className={styles.VectorImage} />
      </div>
    </div>
  );
};
