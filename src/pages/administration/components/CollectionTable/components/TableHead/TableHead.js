export const TableHead = ({ carList }) => {
  return (
    <thead>
      <tr>
        <th style={{ border: "1px solid" }}>Id</th>
        <th style={{ border: "1px solid" }}>Brand</th>
        <th style={{ border: "1px solid" }}>Model</th>
        <th style={{ border: "1px solid" }}>Type</th>
        <th style={{ border: "1px solid" }}>Engine</th>
        <th style={{ border: "1px solid" }}>Horse power</th>
        <th style={{ border: "1px solid" }}>Image URL</th>
        <th style={{ border: "1px solid" }}>Price per day</th>
        <th style={{ border: "1px solid" }}>Top speed</th>
        <th style={{ border: "1px solid" }}>Zero to sixty</th>
        <th style={{ border: "1px solid" }}>Actions</th>
      </tr>
    </thead>
  );
};
