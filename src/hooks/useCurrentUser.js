import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";
import { database } from "../setup/config/firebase";

export function useCurrentUser() {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("currentUserId");

  const fetchCurrentUser = async () => {
    const collectionRef = collection(database, "users");
    const q = query(collectionRef, where("uid", "==", userId));

    const data = await getDocs(q);

    const userData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))[0];

    setUser(userData);
    localStorage.setItem("isAdmin", userData.isAdmin);
  };

  return [user, fetchCurrentUser];
}
