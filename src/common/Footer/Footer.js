import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.Container}>
        <div>
          <p className={styles.ContainerTitle}>Contacts:</p>
          <p>+359 88 888 8888</p>
          <p>rentx@email.com</p>
        </div>
        <div>
          <p className={styles.ContainerTitle}>Social Networking:</p>
          <p>Instagram - @official_rentx</p>
          <p>Facebook - RentX Cars</p>
          <p>TikTok - @official_rentx</p>
        </div>
        <div>
          <p className={styles.ContainerTitle}>Links:</p>
          <a>Terms And Conditions</a>
        </div>
      </div>
      <div>
        <p className={styles.CopyrightText}>
          Copyright © 2023 RentX. All rights reserved
        </p>
      </div>
    </footer>
  );
};
