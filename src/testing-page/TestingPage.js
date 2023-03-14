import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from "../setup/config/firebase";
import { useEffect, useState } from "react";

export const TestingPage = () => {
  const [queryList, setQueryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(database, "cars");
        const q = query(collectionRef, where("brand", "==", "Porsche"));
        const data = await getDocs(q);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setQueryList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {queryList.map((car) => (
        <h1 key={car.id}>{car.model}</h1>
      ))}
    </div>
  );
};
