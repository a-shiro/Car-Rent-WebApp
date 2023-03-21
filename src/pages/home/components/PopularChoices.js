import { useState, useEffect } from "react";
import { getDocs, query, collection, limit } from "firebase/firestore";
import { database } from "../../../setup/config/firebase";
import styles from "../Home.module.css";
import { Link } from "react-router-dom";

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
    <section id="popular-choices">
      <header className={styles.sectionHeader}>
        <h1>
          <span>- Popular</span> <span>Choices -</span>
        </h1>
      </header>
      <div className={styles.displayContainer}>
        {carList.map((car) => (
          <div className={styles.card} key={car.id}>
            <Link to={`cars/${car.path}`}>
              <img className={styles.carImg} src={car.imgUrl} alt={car.model} />
              <span>
                {car.brand} {car.model}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} to="/cars">
          All cars
        </Link>
      </div>
    </section>
  );
};
