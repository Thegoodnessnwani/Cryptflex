import { AuthContext } from "@/contexts/auth-context";
import { GlobalContext } from "@/contexts/global-context";
import { useContext } from "react";

export function useAuth() {
    return useContext(AuthContext);
}

export function useGlobal() {
    return useContext(GlobalContext);
}
