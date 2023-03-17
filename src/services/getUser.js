import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../setup/config/firebase";

export async function getUser() {
  let user = "";
  const userId = localStorage.getItem("currentUserId");

  const collectionRef = collection(database, "users");
  const q = query(collectionRef, where("uid", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    user = doc.data();
  });

  return user;
}
