import {useQuery} from "@tanstack/react-query";
import { getUserDoc } from "@/firebase/db";

export  function useUser(uid: string) {
    return useQuery({
        queryKey: ["user", uid],
        queryFn: () => getUserDoc(uid),
        enabled: !!uid,
    });
}