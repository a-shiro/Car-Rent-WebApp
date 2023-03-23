import styles from "./Contacts.module.css";
import vector from "../../assets/images/car-vector.png";

export const Contacts = () => {
  return (
    <div>
      <header className={styles.Header}>
        <h1>Our Contacts</h1>
      </header>
      <div>
        <img src={vector} className={styles.VectorImage} />
        <div>
          <p>Phone: 000000000</p>
          <p>Email: example@email.com</p>
          <p>Office address: --------</p>
        </div>
      </div>
    </div>
  );
};
