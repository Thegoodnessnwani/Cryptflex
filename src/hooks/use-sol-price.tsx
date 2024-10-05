import { useQuerySolPriceInUsd } from "@/services/queries";

export function useSOLPrice() {
    const {
        data: price,
        isLoading: loading,
        isError: error,
    } = useQuerySolPriceInUsd();
    return { price, loading, error };
}
