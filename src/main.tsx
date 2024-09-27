import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <main className="h-screen overflow-y-scroll relative">
            <div className="w-[45rem] h-[45rem] rounded-[56.3125rem] bg-background-gradient blur-[300px] fixed -z-10 -top-[28rem] -left-[28rem]" />
            <App />
            <div className="w-[45rem] h-[45rem] rounded-[56.3125rem] bg-background-gradient blur-[300px] fixed -z-10 -bottom-[28rem] -right-[28rem]" />
        </main>
    </StrictMode>
);
