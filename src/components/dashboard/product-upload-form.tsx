/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, useFieldArray } from "react-hook-form";
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "../ui/form";
import { ProductUploadFormType } from "@/lib/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductUploadFormSchema } from "@/lib/schema";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import Spinner from "../svg-components/spinner";
// import {
//     useImageUploadMutation,
//     useDeleteImageMutation,
// } from "@/services/mutations";
import { twMerge } from "tailwind-merge";
import ButtonPrimary from "../global/button-primary";
// import GlobalDialog from "../global/global-dialog";
// import VendorProfileForm from "./vendor-profile-form";
import {
    deleteImageFromBucket,
    // isUserVendor,
    uploadImageToBucket,
} from "@/firebase/db";
// import { useAuth } from "@/hooks/use-contexts";
// import { createVendor } from "@/lib/partpay-sdk";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

export default function ProductUploadForm() {
    // const [isOpen, setIsOpen] = useState(false);

    const [isImageUploading, setIsImageUploading] = useState(false);
    const [isImageDeleting, setIsImageDeleting] = useState(false);

    // const { currentUser } = useAuth();

    // const { mutateAsync: uploadImage, isPending: isImageUploadPending } =
    //     useImageUploadMutation();

    // const { mutateAsync: deleteImage, isPending: isImageDeletePending } =
    //     useDeleteImageMutation();

    const [predefinedCategories, setPredefinedCategories] = useState([
        { id: "gadgets", label: "Gadgets" },
        { id: "menwears", label: "Men wears" },
        { id: "womenwears", label: "Women wears" },
        { id: "kidswears", label: "Kids wears" },
        { id: "appliance", label: "Appliance" },
        { id: "kitchenutensils", label: "Kitchen utensils" },
    ]);

    const form = useForm<ProductUploadFormType>({
        mode: "onSubmit",
        resolver: zodResolver(ProductUploadFormSchema),
        defaultValues: {
            hasOptions: false,
            categories: [],
            tags: [],
            productImages: [],
        },
    });

    const {
        control,
        setValue,
        handleSubmit,
        watch,
        formState: { isSubmitting },
    } = form;

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "options",
    });

    const {
        fields: imageFields,
        append: appendImage,
        remove: removeImage,
    } = useFieldArray({
        control,
        name: "productImages",
    });

    const handleProductImageUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // File validation
        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
            toast.error("Invalid file type. Please upload a JPEG image.");
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            toast.error("File is too large. Maximum size is 3MB.");
            return;
        }

        setIsImageUploading(true);
        try {
            const downloadURL = await uploadImageToBucket(file);
            appendImage({ value: downloadURL });
            toast.success("Image uploaded successfully.");
        } catch (error) {
            console.error("Error uploading image: ", error);
            toast.error("Failed to upload image. Please try again.");
        } finally {
            setIsImageUploading(false);
        }
    };

    const handleRemoveImage = async (index: number) => {
        const imageUrl = imageFields[index].value;
        setIsImageDeleting(true);
        try {
            await deleteImageFromBucket(imageUrl);
            removeImage(index);
            toast.success("Image removed successfully");
        } catch (error) {
            console.error("Error removing image: ", error);
            toast.error("Failed to remove image. Please try again.");
        } finally {
            setIsImageDeleting(false);
        }
    };

    async function onFormSubmit(data: ProductUploadFormType) {
        console.log(data);
        // const isVendor = await isUserVendor(currentUser?.uid as string);

        // if (!isVendor) {
        //     toast.info("Please create your vendor profile on-chain first");
        //     setIsOpen(true);
        //     return;
        // }

        // TODO: Upload equipment to blockchain
        // TODO: Upload product to firestore
    }

    const selectedCategories = watch("categories");

    const handleCategoryChange = (categoryId: string, checked: boolean) => {
        const updatedCategories = checked
            ? [...selectedCategories, categoryId]
            : selectedCategories.filter((id) => id !== categoryId);
        setValue("categories", updatedCategories);
    };

    //  useFieldArray for tags
    const {
        fields: tagFields,
        append: appendTag,
        remove: removeTag,
    } = useFieldArray({
        control,
        name: "tags",
    });

    const handleAddCategory = (newCategory: string) => {
        if (
            newCategory &&
            !predefinedCategories.some(
                (cat) => cat.label.toLowerCase() === newCategory.toLowerCase()
            )
        ) {
            const newCategoryId = newCategory
                .toLowerCase()
                .replace(/\s+/g, "-");
            setPredefinedCategories([
                ...predefinedCategories,
                { id: newCategoryId, label: newCategory },
            ]);
            handleCategoryChange(newCategoryId, true);
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 gap-x-10"
            >
                {/* <GlobalDialog
                    title="Create Vendor Profile"
                    description="Fill the details to create a vendor profile on chain"
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                >
                    <VendorProfileForm />
                </GlobalDialog> */}
                { /* <button
                    onClick={async () => {
                        await createVendor();
                    }}
                >
                    Create Vendor
                </button> */}
                <div className="p-4 space-y-6 border-none bg-white/[.07] rounded-2xl">
                    <label className="text-[#84828A] font-bold text-base">
                        Information
                    </label>
                    <FormField
                        control={control}
                        name="productName"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="border-[#84828A] rounded-xl bg-white/[.07]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        control={control}
                        name="productDescription"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Product Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            className="border-[#84828A] rounded-xl bg-white/[.07] resize-none"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />

                    <hr />

                    <FormField
                        control={control}
                        name="productImages"
                        render={() => {
                            return (
                                <FormItem>
                                    <FormLabel className="text-[#84828A] font-bold text-base">
                                        Images
                                    </FormLabel>
                                    <label
                                        htmlFor="product-image"
                                        className="border-dashed border-[#84828A] border bg-white/[.07] rounded-xl w-full p-3  h-56 flex flex-col items-center justify-center gap-y-3 cursor-pointer"
                                    >
                                        <Badge className="py-3 px-6 border border-[#84828A] text-white rounded-sm">
                                            Add File
                                        </Badge>
                                        <span className="block text-[#84828A] text-[.9rem]">
                                            Or drag and drop your image here
                                        </span>
                                    </label>
                                    <FormControl>
                                        <Input
                                            id="product-image"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => {
                                                handleProductImageUpload(e);
                                            }}
                                            accept=".jpg,.jpeg"
                                        />
                                    </FormControl>
                                    <div className="grid grid-cols-3 gap-4">
                                        {isImageUploading && (
                                            <div className="w-32 h-32 flex items-center justify-center bg-white/[.07] rounded">
                                                <Spinner />
                                            </div>
                                        )}
                                        {imageFields.map((field, index) => (
                                            <div
                                                key={field.id}
                                                className={twMerge(
                                                    "relative w-32 h-32",
                                                    isImageDeleting &&
                                                        "flex flex-col items-center justify-center"
                                                )}
                                            >
                                                {isImageDeleting && (
                                                    <div className="w-32 h-32 flex items-center justify-center bg-white/[.07] rounded-lg">
                                                        <Spinner />
                                                    </div>
                                                )}
                                                {!isImageDeleting && (
                                                    <img
                                                        src={field.value}
                                                        alt={`Product image ${
                                                            index + 1
                                                        }`}
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                )}
                                                <Button
                                                    type="button"
                                                    size="sm"
                                                    className="absolute top-1 right-1 group"
                                                    onClick={() =>
                                                        handleRemoveImage(index)
                                                    }
                                                >
                                                    <XMarkIcon className="h-4 w-4 group-hover:text-red-500" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />

                    <hr />

                    <div className="space-y-3">
                        <label className="text-[#84828A] font-bold text-base">
                            Price
                        </label>

                        <div className="space-y-6 md:space-y-0 md:flex items-center justify-between md:w-full gap-x-4">
                            <FormField
                                control={control}
                                name="productPrice"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="md:w-[45%]">
                                            <FormLabel>Price (USDC)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="border-[#84828A] rounded-xl bg-white/[.07]"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={control}
                                name="productDiscount"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="md:w-[45%]">
                                            <FormLabel>
                                                Discount (USDC)
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="border-[#84828A] rounded-xl bg-white/[.07]"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="space-y-3">
                        <label className="text-[#84828A] font-bold text-base">
                            Different Options
                        </label>

                        <FormField
                            control={control}
                            name="hasOptions"
                            render={({ field }) => {
                                return (
                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="data-[state=checked]:bg-[#1E40AF]"
                                            />
                                        </FormControl>
                                        <FormLabel className="text-[#84828A]">
                                            This product has multiple options
                                        </FormLabel>
                                    </FormItem>
                                );
                            }}
                        />
                    </div>

                    <div className="space-y-3">
                        {form.watch("hasOptions") && (
                            <>
                                {fields.map((field, index) => {
                                    return (
                                        <div
                                            key={field.id}
                                            className="space-y-4"
                                        >
                                            <FormField
                                                control={control}
                                                name={`options.${index}.label`}
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem>
                                                            <FormLabel className="text-[#84828A]">
                                                                Option{" "}
                                                                {index + 1}
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    placeholder="e.g. Size, Color"
                                                                    className="border-[#84828A] rounded-xl bg-white/[.07]"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    );
                                                }}
                                            />
                                            <div>
                                                {form
                                                    .watch(
                                                        `options.${index}.values`
                                                    )
                                                    ?.map((_, valueIndex) => (
                                                        <FormField
                                                            key={valueIndex}
                                                            control={
                                                                form.control
                                                            }
                                                            name={`options.${index}.values.${valueIndex}`}
                                                            render={({
                                                                field,
                                                            }) => (
                                                                <FormItem>
                                                                    <FormLabel>
                                                                        {valueIndex ===
                                                                        0
                                                                            ? "Values"
                                                                            : ""}
                                                                    </FormLabel>
                                                                    <div className="flex items-center space-x-2">
                                                                        <FormControl>
                                                                            <Input
                                                                                {...field}
                                                                                placeholder="Option value"
                                                                                className="border-[#84828A] rounded-xl bg-white/[.07]"
                                                                            />
                                                                        </FormControl>
                                                                        {valueIndex >
                                                                            0 && (
                                                                            <Button
                                                                                type="button"
                                                                                variant="destructive"
                                                                                size="sm"
                                                                                onClick={() => {
                                                                                    const currentValues =
                                                                                        form.getValues(
                                                                                            `options.${index}.values`
                                                                                        );
                                                                                    const newValues =
                                                                                        [
                                                                                            ...currentValues.slice(
                                                                                                0,
                                                                                                valueIndex
                                                                                            ),
                                                                                            ...currentValues.slice(
                                                                                                valueIndex +
                                                                                                    1
                                                                                            ),
                                                                                        ];
                                                                                    form.setValue(
                                                                                        `options.${index}.values`,
                                                                                        newValues
                                                                                    );
                                                                                }}
                                                                            >
                                                                                Remove
                                                                            </Button>
                                                                        )}
                                                                    </div>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ))}
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="mt-4 border"
                                                    onClick={() => {
                                                        const currentValues =
                                                            form.getValues(
                                                                `options.${index}.values`
                                                            ) || [];
                                                        form.setValue(
                                                            `options.${index}.values`,
                                                            [
                                                                ...currentValues,
                                                                "",
                                                            ]
                                                        );
                                                    }}
                                                >
                                                    Add Value
                                                </Button>
                                            </div>
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => remove(index)}
                                            >
                                                Remove Option
                                            </Button>
                                        </div>
                                    );
                                })}
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="border rounded-md border-[#84828A] bg-white/[.07] hover:bg-white/[.07] w-full hover:text-white"
                                    onClick={() =>
                                        append({ label: "", values: [""] })
                                    }
                                >
                                    Add Option
                                </Button>
                            </>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-4 space-y-6 border-none bg-white/[.07] rounded-2xl lg:max-w-xl">
                        <FormField
                            control={control}
                            name="categories"
                            render={() => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-[#84828A] font-bold text-base">
                                            Categories
                                        </FormLabel>
                                        {predefinedCategories.map(
                                            (item: any) => (
                                                <FormField
                                                    key={item.id}
                                                    control={form.control}
                                                    name="categories"
                                                    render={() => {
                                                        return (
                                                            <FormItem
                                                                key={item.id}
                                                                className="flex flex-row items-start space-x-3 space-y-0"
                                                            >
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={selectedCategories.includes(
                                                                            item.id
                                                                        )}
                                                                        onCheckedChange={(
                                                                            checked
                                                                        ) =>
                                                                            handleCategoryChange(
                                                                                item.id,
                                                                                checked as boolean
                                                                            )
                                                                        }
                                                                        className="border-white"
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="text-base text-[#84828A] font-normal mt-0">
                                                                    {item.label}
                                                                </FormLabel>
                                                            </FormItem>
                                                        );
                                                    }}
                                                />
                                            )
                                        )}
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    className="text-textPrimary"
                                    type="button"
                                >
                                    Create new
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-50 bg-black space-y-2"
                                align="center"
                            >
                                <Input
                                    placeholder="Enter category name"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            const input =
                                                e.target as HTMLInputElement;
                                            if (input.value.trim()) {
                                                handleAddCategory(
                                                    input.value.trim()
                                                );
                                                input.value = "";
                                            }
                                        }
                                    }}
                                    className="border-[#84828A] rounded-xl bg-white/[.07] text-white"
                                />
                                <span className="text-white block text-sm">
                                    Press Enter to add
                                </span>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="p-4  border-none bg-white/[.07] rounded-2xl lg:max-w-sm">
                        <FormField
                            control={form.control}
                            name="tags"
                            render={() => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Tags</FormLabel>
                                    <FormDescription>
                                        Add tags to your product
                                    </FormDescription>
                                    <FormControl>
                                        <Input
                                            placeholder="Add tag"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    const value = (
                                                        e.target as HTMLInputElement
                                                    ).value.trim();
                                                    if (
                                                        value &&
                                                        !tagFields.some(
                                                            (tag) =>
                                                                tag.value ===
                                                                value
                                                        )
                                                    ) {
                                                        appendTag({ value });
                                                        (
                                                            e.target as HTMLInputElement
                                                        ).value = "";
                                                    }
                                                }
                                            }}
                                            className="border-[#84828A] rounded-xl bg-white/[.07] text-white"
                                        />
                                    </FormControl>
                                    <div className="flex flex-wrap gap-2">
                                        {tagFields.map((field, index) => (
                                            <Badge
                                                key={field.id}
                                                variant="secondary"
                                                className="bg-white/[.07] text-[#84828A] flex items-center gap-x-2 max-w-max h-9 px-4 text-sm"
                                            >
                                                {field.value}
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-auto p-0 ml-2"
                                                    onClick={() =>
                                                        removeTag(index)
                                                    }
                                                >
                                                    <XMarkIcon className="h-4 w-4" />
                                                </Button>
                                            </Badge>
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <ButtonPrimary
                            loading={isSubmitting}
                            variant="primary"
                            className="h-11 w-full xl:w-auto xl:px-7"
                        >
                            Upload Product
                        </ButtonPrimary>
                    </div>
                </div>
            </form>
        </Form>
    );
}
