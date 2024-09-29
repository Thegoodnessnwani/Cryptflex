import { createContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "@/firebase";
import { User } from "firebase/auth";
import { getUser } from "@/firebase/db";
import { DocumentData } from "firebase/firestore";

type AuthContextType = {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean;
    userFullData: DocumentData | undefined;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userFullData, setUserFullData] = useState<
        DocumentData | undefined
    >();
    const [loading, setLoading] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);

        return unsubscribe;
    }, []);

    async function initializeUser(user: User | null) {
        if (user) {
            setCurrentUser(user);
            setUserLoggedIn(true);
            const userData = await getUser(user.uid);
            setUserFullData(userData);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        userFullData,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
