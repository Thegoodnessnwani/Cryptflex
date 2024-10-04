import z from "zod";

import { MerchantSignupFormSchema, MerchantLoginFormSchema, BuyerSignupFormSchema, BuyerLoginFormSchema } from "./schema";

export type MerchantSignupFormType = z.infer<typeof MerchantSignupFormSchema>;

export type MerchantLoginFormType = z.infer<typeof MerchantLoginFormSchema>;

export type BuyerSignupFormType = z.infer<typeof BuyerSignupFormSchema>;

export type BuyerLoginFormType = z.infer<typeof BuyerLoginFormSchema>;