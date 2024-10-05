/* eslint-disable @typescript-eslint/no-explicit-any */
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db, storage } from ".";
import { errorParser } from "@/lib/utils";
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as uuidv4 } from "uuid";
import { VendorData } from "@/lib/partpay-sdk";

export async function storeUser(uid: string, userData: any) {
    try {
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, {...userData, displayName: userData.firstName + " " + userData.lastName});
    } catch(error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Error storing user details: " + parsedError);
        throw new Error(parsedError.code)
    }
}

export async function updateUser(uid: string, data: any) {
    try {
        const userRef = doc(db, "users", uid)
        await setDoc(userRef, data, { merge: true });
    } catch(error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Error storing user details: " + parsedError);
        throw new Error(parsedError.code)
    }
}


export async function getUserRole(uid: string) {
    // Get user role from firestore
    try {
        const user = await getDoc(doc(db, "users", uid));
        return user?.data()?.role;

    } catch(error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Error getting user role: " + parsedError);
        throw new Error(parsedError.code)
    }
}

export async function getUserDoc(uid: string) {
    // Get user from firestore
    try {
        const user = await getDoc(doc(db, "users", uid));
        return user;
    } catch(error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Error getting user: " + parsedError);
        throw new Error(parsedError.code);
    }
}

export const uploadImageToBucket = async (file: File): Promise<string> => {
    const fileExtension = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    const storageRef = ref(storage, `product-images/${fileName}`);
  
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Unable to upload image" + parsedError);
        throw new Error(parsedError.code);
    }
  };

export const deleteImageFromBucket = async (url: string) => {
    const imageRef = ref(storage, url);

    try {
      await deleteObject(imageRef);
    } catch (error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Unable to delete image" + parsedError);
        throw new Error(parsedError.code);
    }
}

export async function checkWalletConnection(uid: string) {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists() && userDoc.data().walletConnected) {
        return true;
      } else {
        return false;
      }
    } catch(error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Error checking wallet connection" + parsedError);
        throw new Error(parsedError.code);
    }
}

export async function isUserVendor(uid: string) {
    const vendorsRef = collection(db, 'vendors');
    const q = query(vendorsRef, where("user_id", "==", uid));
    const querySnapshot = await getDocs(q);
    
    return !querySnapshot.empty;
}

export async function storeVendor(data: VendorData & any, publicKey: string) {
    try {
        const vendorRef = doc(db, "vendors", publicKey);
        await setDoc(vendorRef, data);
    } catch(error: any) {
        const parsedError = errorParser.parseError(error.code as string)
        console.error("Error storing vendor details: " + parsedError);
        throw new Error(parsedError.code)
    }
}

// Register user

// get user

// update user