import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalContextProvider from "./contexts/global-context.tsx";
import { AuthProvider } from "./contexts/auth-context/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalContextProvider>
            <AuthProvider>
                <main>
                    <App />
                </main>
            </AuthProvider>
        </GlobalContextProvider>
    </StrictMode>
);
