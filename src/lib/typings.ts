import z from "zod";

import { MerchantSignupFormSchema, MerchantLoginFormSchema, BuyerSignupFormSchema, BuyerLoginFormSchema, ProductUploadFormSchema, VendorProfileFormSchema } from "./schema";

export type MerchantSignupFormType = z.infer<typeof MerchantSignupFormSchema>;

export type MerchantLoginFormType = z.infer<typeof MerchantLoginFormSchema>;

export type BuyerSignupFormType = z.infer<typeof BuyerSignupFormSchema>;

export type BuyerLoginFormType = z.infer<typeof BuyerLoginFormSchema>;

export type ProductUploadFormType = z.infer<typeof ProductUploadFormSchema>

export type VendorProfileFormType = z.infer<typeof VendorProfileFormSchema>