import z from "zod"

const MerchantSignupFormSchema = z.object({
    firstName: z.string({
        required_error: "First name is required",
    }).min(2, "First name must be at least 2 characters"),
    lastName: z.string({
        required_error: "Last name is required",
    }).min(2, "Last name must be at most 2 characters"),
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    phoneNumber: z.string({
        required_error: "Phone number is required",
    }).min(10, "Phone number must be at least 10 characters").regex(
        /^\+?[0-9]{11,}$/,
        "Invalid phone number"
    ),
    businessName: z.string({
        required_error: "Business name is required",
    }).min(5, "Business name must be at least 5 characters"),
    businessAddress: z.string({
        required_error: "Business address is required",
    }).min(5, "Business address must be at least 5 characters"),
    password: z.string({
        required_error: "Password is required",
    }).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must be at least 8 characters long and contain at least one letter and one number."),
    termsOfUse: z.boolean({
        required_error: "This field is required",
    }).default(false).refine(value => value === true, "This field is required"),
    marketing: z.boolean({
        required_error: "This field is required",
    }).default(false).refine(value => value === true, "This field is required"),
    role: z.enum(["merchant"]).default("merchant").optional(),
})

const MerchantLoginFormSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    password: z.string({
        required_error: "Password is required",
    }),
})

const BuyerSignupFormSchema = z.object({
    firstName: z.string({
        required_error: "First name is required",
    }).min(2, "First name must be at least 2 characters"),
    lastName: z.string({
        required_error: "Last name is required",
    }).min(2, "Last name must be at most 2 characters"),
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    phoneNumber: z.string({
        required_error: "Phone number is required",
    }).min(10, "Phone number must be at least 10 characters").regex(
        /^\+?[0-9]{11,}$/,
        "Invalid phone number"
    ),
    password: z.string({
        required_error: "Password is required",
    }).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must be at least 8 characters long and contain at least one letter and one number."),
    termsOfUse: z.boolean({
        required_error: "This field is required",
    }).default(false).refine(value => value === true, "This field is required"),
    marketing: z.boolean({
        required_error: "This field is required",
    }).default(false).refine(value => value === true, "This field is required"),
    role: z.enum(["buyer"]).default("buyer").optional(),
})

const BuyerLoginFormSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    password: z.string({
        required_error: "Password is required",
    }),
})

const productOptionSchema = z.object({
    label: z.string().min(1, "Label is required"),
    values: z.array(z.string()).min(1, "At least one value is required"),
})

const ProductUploadFormSchema = z.object({
    productName: z.string({
        required_error: "Product name is required"
    }).min(3, "Name must be at least 3 characters"),
    productDescription: z.string({
        required_error: "Product description is required"
    }).min(10, "Description must be at least 10 characters"),
    productImages: z.array(z.object({ value: z.string() })).min(1, "Please upload at least one product image"),
    productPrice: z.string({
        required_error: "Product price is required"
    }).regex(/^[1-9]\d*$/, {
        message: "Please enter a positive figure",
      }),
    productDiscount: z.string({
        required_error: "Product discount is required"
    }).regex(/^[1-9]\d*$/, {
        message: "Please enter a positive figure",
      }),
    hasOptions: z.boolean().default(false),
    options: z.array(productOptionSchema).optional(),
    categories: z.array(z.string()).min(1, "Select at least one category"),
    tags: z.array(z.object({ value: z.string() })).min(1, "At least one tag is required"),
})

const FileSchema = typeof window === "undefined" 
  ? z.any()
  : z.instanceof(File, { message: "Please upload a file" })
    .refine((file) => file !== undefined && file !== null, {
      message: "Please upload a file",
    });

    enum VendorStatus {
        Active = "active",// Vendor is actively operating
        Inactive = "inactive",// Vendor is temporarily not operating
        Pending = "pending"
    }

const VendorProfileFormSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }).min(2, "Name must be at least 2 characters"),
    profileImage: FileSchema,
    businessName: z.string({
        required_error: "Business name is required",
    }).min(5, "Business name must be at least 5 characters"),
    businessDescription: z.string({
        required_error: "Business description is required",
    }).min(10, "Description must be at least 10 characters"),
    status: z.nativeEnum(VendorStatus).default(VendorStatus.Active).optional(),
    });

export {
    MerchantSignupFormSchema,
    MerchantLoginFormSchema,
    BuyerSignupFormSchema,
    BuyerLoginFormSchema,
    ProductUploadFormSchema,
    VendorProfileFormSchema,
}