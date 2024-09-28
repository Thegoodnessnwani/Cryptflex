import z from "zod";

import { MerchantSignupFormSchema, MerchantLoginFormSchema } from "./schema";

export type MerchantSignupFormType = z.infer<typeof MerchantSignupFormSchema>;

export type MerchantLoginFormType = z.infer<typeof MerchantLoginFormSchema>;