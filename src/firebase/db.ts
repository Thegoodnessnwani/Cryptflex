/* eslint-disable @typescript-eslint/no-explicit-any */
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from ".";
import { errorParser } from "@/lib/utils";

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

// Register user

// get user

// update user