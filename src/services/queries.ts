import {useQuery} from "@tanstack/react-query";
import { getUser } from "@/firebase/db";

export  function useUser(uid: string) {
    return useQuery({
        queryKey: ["user", uid],
        queryFn: () => getUser(uid),
        enabled: !!uid,
    });
}