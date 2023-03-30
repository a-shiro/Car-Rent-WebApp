import { collection, query, limit, where, getDocs } from "firebase/firestore";
import { database } from "../setup/config/firebase";

export async function getData(collectionName, docLimit) {
  try {
    const collectionRef = collection(database, collectionName);
    const q = query(collectionRef, docLimit && limit(docLimit));
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return filteredData;
  } catch (err) {
    console.error(err);
  }
}

export async function getDataWhere(
  collectionName,
  { fieldName, operator, fieldValue }
) {
  try {
    const collectionRef = collection(database, collectionName);
    const q = query(collectionRef, where(fieldName, operator, fieldValue));
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return filteredData[0];
  } catch (err) {
    console.error(err);
  }
}
