/* eslint-disable @typescript-eslint/no-explicit-any */
// import "../../init";
import { useForm } from "react-hook-form";
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VendorProfileFormType } from "@/lib/typings";
import { VendorProfileFormSchema } from "@/lib/schema";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";
import Button from "../global/button-primary";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getPhotoUrl } from "@/lib/utils";
import { useAuth } from "@/hooks/use-contexts";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
// import { storeVendor, uploadImageToBucket } from "@/firebase/db";
// import { createVendor, VendorData } from "@/lib/partpay-sdk";
// import { toast } from "sonner";
import Spinner from "../svg-components/spinner";
// import { useWallet } from "@/hooks/use-contexts";
// import Solflare from "@solflare-wallet/sdk";

enum VendorStatus {
    Active = "active", // Vendor is actively operating
    Inactive = "inactive", // Vendor is temporarily not operating
    Pending = "pending",
}

export default function VendorProfileForm() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const { userFullData } = useAuth();
    const form = useForm<VendorProfileFormType>({
        mode: "onSubmit",
        resolver: zodResolver(VendorProfileFormSchema),
        defaultValues: {
            status: VendorStatus.Active,
            name: userFullData?.displayName || "",
        },
    });

    const {
        control,
        setValue,
        watch,
        formState: { errors, isSubmitting: isPending },
    } = form;

    const watchProfileImage = watch("profileImage");

    useEffect(() => {
        if (watchProfileImage instanceof File) {
            getPhotoUrl(watchProfileImage).then(setPreviewUrl);
        } else {
            setPreviewUrl(null);
        }
    }, [watchProfileImage]);

    // async function createVendorProfile(data: VendorProfileFormType) {
    //     // // // Upload image to storage bucket and get url
    //     // const imageUrl = await uploadImageToBucket(data.profileImage);
    //     // // Create vendor data and store in firestore
    //     // const vendorData: VendorData = {
    //     //     ...data,
    //     //     image: imageUrl,
    //     //     shopName: data.businessName,
    //     //     description: data.businessDescription,
    //     //     status: data.status as VendorStatus,
    //     // };
    //     // try {
    //     //     const { publicKey, secretKey, signature } = await createVendor(
    //     //         wallet as Solflare
    //     //     );
    //     //     const vendorFullData = {
    //     //         ...vendorData,
    //     //         publicKey,
    //     //         secretKey,
    //     //         blockchainSignature: signature,
    //     //         createdAt: new Date().toISOString(),
    //     //     };
    //     //     await storeVendor(vendorFullData, publicKey);
    //     //     toast.success("Vendor profile created successfully");
    //     // } catch (error: any) {
    //     //     toast.error("Failed to create vendor profile");
    //     //     console.log(error);
    //     // }
    // }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setValue("profileImage", file, { shouldValidate: true });
        }
    };

    const removeImage = () => {
        setValue("profileImage", undefined, { shouldValidate: true });
    };

    return (
        <Form {...form}>
            <form
                // onSubmit={handleSubmit(createVendorProfile)}
                className="space-y-6"
            >
                <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Vendor Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    disabled
                                    className="border-[#84828A] rounded-xl bg-white/[.07]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="profileImage"
                    render={({ field: { value, ...field } }) => (
                        <FormItem>
                            <FormLabel>Vendor Image</FormLabel>
                            {previewUrl ? (
                                <div className="relative w-full h-56">
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        className="absolute top-2 right-2"
                                        onClick={removeImage}
                                    >
                                        <XMarkIcon className="h-5 w-5 text-red-400" />
                                    </Button>
                                </div>
                            ) : (
                                <label
                                    htmlFor="vendor-profile-image"
                                    className="border-dashed border-[#84828A] border bg-white/[.07] rounded-xl w-full p-3 h-56 flex flex-col items-center justify-center gap-y-3 cursor-pointer"
                                >
                                    <Badge className="py-3 px-6 border border-[#84828A] text-white rounded-sm">
                                        Add File
                                    </Badge>
                                    <span className="block text-[#84828A] text-[.9rem]">
                                        Or drag and drop your image here
                                    </span>
                                </label>
                            )}
                            <FormControl>
                                <Input
                                    id="vendor-profile-image"
                                    type="file"
                                    className="hidden"
                                    {...field}
                                    onChange={(e) => {
                                        handleImageUpload(e);
                                    }}
                                    accept=".jpg,.jpeg"
                                />
                            </FormControl>
                            <FormMessage>
                                {errors.profileImage &&
                                    errors.profileImage.message?.toString()}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="businessName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    className="border-[#84828A] rounded-xl bg-white/[.07]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="businessDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Business Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    className="border-[#84828A] rounded-xl bg-white/[.07] resize-none"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="status"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Vendor Status</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem
                                                value={"active"}
                                                className="border-white text-white"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Active
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem
                                                value={"inactive"}
                                                className="border-white text-white"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Inactive
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem
                                                value={"pending"}
                                                className="border-white text-white"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Pending
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormDescription>
                                Select the current status of your vendor profile
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="button"
                    className="h-10 hover:bg-white hover:text-black"
                    disabled={isPending}
                    // onClick={handleSubmit(createVendorProfile)}
                >
                    {isPending ? <Spinner /> : "Create Vendor Profile"}
                </Button>
            </form>
        </Form>
    );
}
