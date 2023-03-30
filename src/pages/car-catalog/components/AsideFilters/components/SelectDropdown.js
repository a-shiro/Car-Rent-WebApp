import styles from "../../../Catalog.module.css";

export const SelectDropdown = ({ options }) => {
  return (
    <select className={styles.AsideDropdown}>
      {options.map((value) => {
        return <option key={value}>{value}</option>;
      })}
    </select>
  );
};
