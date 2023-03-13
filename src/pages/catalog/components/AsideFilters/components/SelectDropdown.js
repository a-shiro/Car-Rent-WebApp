export const SelectDropdown = ({ options }) => {
  return (
    <select>
      {options.map((value) => {
        return <option key={value}>{value}</option>;
      })}
    </select>
  );
};
