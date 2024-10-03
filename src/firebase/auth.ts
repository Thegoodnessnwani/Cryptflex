/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuyerSignupFormType, MerchantSignupFormType } from "@/lib/typings";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { storeUser } from "./db";
import { auth } from "./index";
import { errorParser } from "@/lib/utils";


export async function registerUser(userData: MerchantSignupFormType | BuyerSignupFormType) {
    try {
        // Create user
        const { email, password, ...rest } = userData;
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        // Store user data in firestore
        const user = userCredentials.user;
        await storeUser(user.uid, {...rest});

    } catch(error: any) {
        const parsedError = errorParser.parseError(error?.code as string)
        throw new Error(parsedError.message || error)
    }
}

export async function signInUser(email: string, password: string) {
    try {
        // Sign in user
        await signInWithEmailAndPassword(auth, email, password);
    } catch(error: any) {
        const parsedError = errorParser.parseError(error?.code as string)
        console.error("Error signing in user: " + parsedError.code);
        throw new Error(parsedError.message || error)
    }
}

export async function signOutUser() {
    try {
        await signOut(auth);
    } catch(error: any) {
        const parsedError = errorParser.parseError(error?.code as string)
        console.error("Error signing out user: " + parsedError);
        throw new Error(parsedError.message)
    }
}

export async function signInWithGoogle() {
    try {
        // Sign in with google
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        return result.user;
    } catch(error: any) {
        const parsedError = errorParser.parseError(error?.code as string)
        console.error("Error signing in with google: " + parsedError);
        throw new Error(parsedError.message)
    }
}