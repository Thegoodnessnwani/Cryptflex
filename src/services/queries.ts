import {useQuery} from "@tanstack/react-query";
import { getUserDoc } from "@/firebase/db";

const SOLPRICE_API = import.meta.env.VITE_SOLPRICE_API_URL

export  function useUser(uid: string) {
    return useQuery({
        queryKey: ["user", uid],
        queryFn: () => getUserDoc(uid),
        enabled: !!uid,
    });
}

export function useQuerySolPriceInUsd() {
    return useQuery({
        queryKey: ["solPrice"],
        queryFn: async () => {
            const response = await fetch(
                SOLPRICE_API,
            );
            const data = await response.json();
            return data.solana.usd;
        },
    });
}