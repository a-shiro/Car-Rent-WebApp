import { useState, useEffect } from "react";
import { getDocs, collection, query, limit } from "firebase/firestore";
import { database } from "../../../../setup/config/firebase";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import styles from "./PopularChoices.module.css";
import commonStyles from "../../Home.module.css";

export const PopularChoices = () => {
  //  ToDo: implement rented count field in database and query the top 4 - 6 rented cars in this page
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const queryCarList = async () => {
      try {
        const collectionRef = collection(database, "cars");
        const q = query(collectionRef, limit(4));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setCarList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    queryCarList();
  }, []);

  return (
    <section className={styles.PopularChoicesSection}>
      <header className={styles.Header}>
        <h1>- Popular Choices -</h1>
      </header>
      <div className={styles.CardsContainer}>
        {carList.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
      <div className={styles.ButtonsContainer}>
        <Link className={commonStyles.Button} to="/cars">
          All cars
        </Link>
      </div>
    </section>
  );
};
