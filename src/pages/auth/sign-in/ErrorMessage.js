import styles from "./SignIn.module.css";

export const ErrorMessage = ({ error }) => {
  return (
    <span className={styles.ErrorMessage}>
      {error[Object.keys(error)].message}
    </span>
  );
};
