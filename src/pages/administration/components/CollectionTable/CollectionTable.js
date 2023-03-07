import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "../../../../setup/config/firebase";
import { TableBody } from "./components/TableBody/TableBody";
import { TableHead } from "./components/TableHead/TableHead";

export const CollectionTable = () => {
  const [carList, setCarList] = useState([]);

  const queryCarList = async () => {
    try {
      const data = await getDocs(collection(database, "cars"));
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setCarList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    queryCarList();
  }, []);

  return (
    <table style={{ border: "1px solid" }}>
      <TableHead carList={carList} />
      <TableBody carList={carList} />
    </table>
  );
};
