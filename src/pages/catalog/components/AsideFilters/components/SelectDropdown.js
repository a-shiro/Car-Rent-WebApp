export const SelectDropdown = ({ options }) => {
  return (
    <select>
      {options.map((value) => {
        return <option>{value}</option>;
      })}
    </select>
  );
};
