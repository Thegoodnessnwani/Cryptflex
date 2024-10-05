/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalContextProvider from "./contexts/global-context.tsx";
import { AuthProvider } from "./contexts/auth-context/index.tsx";
import { WalletProvider } from "./contexts/wallet-context.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalContextProvider>
            <AuthProvider>
                <WalletProvider>
                    <main>
                        <App />
                    </main>
                </WalletProvider>
            </AuthProvider>
        </GlobalContextProvider>
    </StrictMode>
);
