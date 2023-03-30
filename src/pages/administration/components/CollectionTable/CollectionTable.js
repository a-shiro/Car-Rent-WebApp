import { useState, useEffect } from "react";
import { fetchData } from "../../../../services/queries";
import { TableBody } from "./components/TableBody/TableBody";
import { TableHead } from "./components/TableHead/TableHead";

export const CollectionTable = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const queryCarList = async () => {
      const data = await fetchData("cars");

      setCarList(data);
    };

    queryCarList();
  }, []);

  return (
    <table style={{ border: "1px solid" }}>
      <TableHead carList={carList} />
      <TableBody carList={carList} />
    </table>
  );
};
