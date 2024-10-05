/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { checkWalletConnection, deleteImageFromBucket, updateUser, uploadImageToBucket } from "@/firebase/db";
// import { createVendor, VendorData } from "@/lib/partpay-sdk";
// import { toast } from "sonner";

export const useImageUploadMutation = () => {
    return useMutation({
        mutationFn: uploadImageToBucket,
        onError: function handleUploadError(error: any) {
            console.error(error);
        }
    })
}

export const useDeleteImageMutation = () => {
    return useMutation({
        mutationFn: deleteImageFromBucket,
        onError: function handleDeleteError(error: any) {
            console.error(error);
        }
    })
}

export function useCheckWalletConnectionStatusMutation() {
    return useMutation({
        mutationFn: checkWalletConnection,
        onError: function handleError(error: any) {
            console.error(error)
        }
    })
}

export function useUpdateUserMutation() {
    return useMutation({
        mutationFn: ({ uid, data }: { uid: string, data: any }) => updateUser(uid, data),
        onError: function handleError(error: any) {
            console.error(error)
        }
    })
}