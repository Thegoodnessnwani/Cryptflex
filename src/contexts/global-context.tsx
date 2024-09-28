import { createContext, useState } from "react";

export type GlobalContextType = {
    merchantForm: "signup" | "login";
    setMerchantForm: React.Dispatch<React.SetStateAction<"signup" | "login">>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [merchantForm, setMerchantForm] = useState<"signup" | "login">(
        "signup"
    );

    const value = {
        merchantForm,
        setMerchantForm,
    };
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}
