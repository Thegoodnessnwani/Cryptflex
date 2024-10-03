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

export {
    MerchantSignupFormSchema,
    MerchantLoginFormSchema,
    BuyerSignupFormSchema,
    BuyerLoginFormSchema,
}