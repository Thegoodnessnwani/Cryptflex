import { AuthContext } from "@/contexts/auth-context";
import { GlobalContext } from "@/contexts/global-context";
import { WalletContext } from "@/contexts/wallet-context";
import { useContext } from "react";

export function useAuth() {
    return useContext(AuthContext);
}

export function useGlobal() {
    return useContext(GlobalContext);
}

export function useWallet() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
