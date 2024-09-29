import { createContext, useState } from "react";
import { Toaster } from "sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client-setup";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type GlobalContextType = {
    form: "signup" | "login";
    setForm: React.Dispatch<React.SetStateAction<"signup" | "login">>;
};

export const GlobalContext = createContext({} as GlobalContextType);

export default function GlobalContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [form, setForm] = useState<"signup" | "login">("signup");

    const value = {
        form,
        setForm,
    };

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalContext.Provider value={value}>
                <Toaster closeButton richColors position="bottom-right" />
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </GlobalContext.Provider>
        </QueryClientProvider>
    );
}
