
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Add data to a Firestore collection
export const addData = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID:", docRef.id);
        return docRef.id; // Return the ID of the added document
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

// Fetch all data from a Firestore collection
export const fetchData = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = [];
    querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() }); // Include the document ID in the returned data
    });
    return dataList;
};

// Edit data in a Firestore collection
export const editData = async (collectionName, docId, updatedData) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, updatedData);
        console.log("Document updated with ID:", docId);
    } catch (error) {
        console.error("Error updating document:", error);
    }
};

// Delete data from a Firestore collection
export const deleteData = async (collectionName, docId) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await deleteDoc(docRef);
        console.log("Document deleted with ID:", docId);
    } catch (error) {
        console.error("Error deleting document:", error);
    }
};
