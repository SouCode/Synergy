
import { db } from './firebaseConfig'; 
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addData = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

export const fetchData = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = [];
    querySnapshot.forEach((doc) => {
        dataList.push(doc.data());
    });
    return dataList;
};

