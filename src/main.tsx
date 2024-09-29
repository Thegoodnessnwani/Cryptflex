import { StrictMode, Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalContextProvider from "./contexts/global-context.tsx";
import { AuthProvider } from "./contexts/auth-context/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalContextProvider>
            <AuthProvider>
                <main className="h-screen overflow-y-scroll relative px-2 xl:px-3 no-scrollbar">
                    <Fragment>
                        <div className="w-[45rem] h-[45rem] rounded-[56.3125rem] bg-background-gradient blur-[300px] fixed -z-10 -top-[28rem] -left-[28rem]" />
                        <App />
                        <div className="w-[45rem] h-[45rem] rounded-[56.3125rem] bg-background-gradient blur-[300px] fixed -z-10 -bottom-[28rem] -right-[28rem]" />
                    </Fragment>
                </main>
            </AuthProvider>
        </GlobalContextProvider>
    </StrictMode>
);
