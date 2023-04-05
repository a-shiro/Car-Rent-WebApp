import {
  collection,
  query,
  limit,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
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

export async function getDataById(collectionName, id) {
  try {
    const docRef = doc(database, collectionName, id);
    const data = await getDoc(docRef);
    const filteredData = data.data();
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

export async function postData(collectionName, body) {
  try {
    const collectionRef = collection(database, collectionName);
    await addDoc(collectionRef, body);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteDataById(collectionName, id) {
  try {
    const carDoc = doc(database, collectionName, id);
    await deleteDoc(carDoc);
  } catch (err) {
    console.error(err);
  }
}

export async function updateDataById(collectionName, id, body) {
  try {
    const docRef = doc(database, collectionName, id);
    await updateDoc(docRef, body);
  } catch (err) {
    console.error(err);
  }
}
