import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Add a new asset
export const addAsset = async (asset) => {
  try {
    const docRef = await addDoc(collection(db, "Assets"), asset);
    return docRef.id;
  } catch (error) {
    console.error("Error adding asset: ", error);
  }
};

// Fetch all assets
export const fetchAssets = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Assets"));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error fetching assets: ", error);
  }
};

// Update an asset
export const updateAsset = async (id, updatedData) => {
  try {
    const assetRef = doc(db, "Assets", id);
    await updateDoc(assetRef, updatedData);
  } catch (error) {
    console.error("Error updating asset: ", error);
  }
};

// Delete an asset
export const deleteAsset = async (id) => {
  try {
    const assetRef = doc(db, "Assets", id);
    await deleteDoc(assetRef);
  } catch (error) {
    console.error("Error deleting asset: ", error);
  }
};
