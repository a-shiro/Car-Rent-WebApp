import { getDocs, collection, query, where } from "firebase/firestore";
import { auth, database } from "../../setup/config/firebase";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Profile = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(database, "users");
      const q = query(
        collectionRef,
        where("uid", "==", auth?.currentUser?.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserData(doc.data());
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile page</h1>
      <div>
        <img
          height="100px"
          width="150px"
          src="https://static7.depositphotos.com/1144472/739/i/950/depositphotos_7397871-stock-photo-customer-support-phone-operator-at.jpg"
        />
        <p>
          Name: {userData?.firstName} {userData?.lastName}
        </p>
        <p>Email: {auth?.currentUser?.email}</p>
        <p>Number: 000000000</p>
        <button>Add payment method</button>
        <Link to="/administration">To Administation</Link>
      </div>

      <div>
        <h1>Currently Rented:</h1>
        <h2>No rents at this time</h2>
      </div>
    </div>
  );
};
