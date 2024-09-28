import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import Button from "../global/button-primary";
import {
    MerchantSignupFormSchema,
    MerchantLoginFormSchema,
} from "@/lib/schema";
import { MerchantLoginFormType, MerchantSignupFormType } from "@/lib/typings";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { GlobalContext, GlobalContextType } from "@/contexts/global-context";
import { useContext } from "react";

export function MerchantSignupForm() {
    const [revealPassword, setRevealPassword] = useState(false);

    const form = useForm<MerchantSignupFormType>({
        mode: "onSubmit",
        resolver: zodResolver(MerchantSignupFormSchema),
    });

    const context = useContext<GlobalContextType | null>(GlobalContext);
    const merchantForm = context?.setMerchantForm;

    const { handleSubmit, control } = form;

    async function submitForm(data: MerchantSignupFormType) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form className="space-y-5 " onSubmit={handleSubmit(submitForm)}>
                <div className="space-y-5 sm:space-y-0 sm:flex items-center gap-x-4 w-full">
                    <FormField
                        name="firstName"
                        control={control}
                        render={({ field }) => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>First name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="text-white bg-transparent border-white/35"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        name="lastName"
                        control={control}
                        render={({ field }) => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>Last name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="text-white bg-transparent border-white/35"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                </div>

                <FormField
                    name="email"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="text-white bg-transparent border-white/35"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="text-white bg-transparent border-white/35"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    name="businessName"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Business Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="text-white bg-transparent border-white/35"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    name="password"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex items-center justify-between w-full">
                                    <FormLabel>Password</FormLabel>
                                    <Button
                                        variant="secondary"
                                        type="button"
                                        className="flex items-center gap-x-2"
                                        onClick={() =>
                                            setRevealPassword(!revealPassword)
                                        }
                                    >
                                        {revealPassword ? (
                                            <EyeSlashIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                        <span>Hide</span>
                                    </Button>
                                </div>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="text-white bg-transparent border-white/35"
                                        type={
                                            revealPassword ? "text" : "password"
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                                <FormDescription className="text-white/90">
                                    Password must be at least 8 characters long
                                    and contain at least one letter and one
                                    number.
                                </FormDescription>
                            </FormItem>
                        );
                    }}
                />
                <div className="space-y-3">
                    <FormField
                        name="termsOfUse"
                        control={control}
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                    <Checkbox
                                        id="terms"
                                        className=" border-white self-start"
                                        // {...field}
                                        onCheckedChange={field.onChange}
                                        checked={field.value}
                                    />
                                    <FormLabel
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        By signing up, you agree to our{" "}
                                        <a
                                            href="#"
                                            className="underline text-textSecondary"
                                        >
                                            Terms of use
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="#"
                                            className="underline text-textSecondary"
                                        >
                                            Privacy Policy
                                        </a>
                                    </FormLabel>
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        name="marketing"
                        control={control}
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                    <Checkbox
                                        id="marketing"
                                        className=" border-white self-start"
                                        // {...field}
                                        onCheckedChange={field.onChange}
                                        checked={field.value}
                                    />
                                    <FormLabel
                                        htmlFor="marketing"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        By creating an account, I am also
                                        consenting to receive SMS messages and
                                        emails, including product new feature
                                        updates, events, and marketing
                                        promotions.
                                    </FormLabel>
                                </FormItem>
                            );
                        }}
                    />

                    {/* <div className="flex items-center space-x-2">
                        <Checkbox
                            id="terms"
                            className=" border-white self-start"
                        />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            By signing up, you agree to our{" "}
                            <a
                                href="#"
                                className="underline text-textSecondary"
                            >
                                Terms of use
                            </a>{" "}
                            and{" "}
                            <a
                                href="#"
                                className="underline text-textSecondary"
                            >
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="terms"
                            className=" border-white self-start"
                        />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 l"
                        >
                            By creating an account, I am also consenting to
                            receive SMS messages and emails, including product
                            new feature updates, events, and marketing
                            promotions.
                        </label>
                    </div> */}
                </div>

                <div className="flex items-center gap-x-3">
                    <Button variant="primary" className="h-9 px-5">
                        Sign up
                    </Button>
                    <span className="block">
                        Already have an account?{" "}
                        <span
                            className="text-textSecondary underline cursor-pointer"
                            onClick={() =>
                                merchantForm && merchantForm("login")
                            }
                        >
                            Sign in
                        </span>
                    </span>
                </div>
            </form>
        </Form>
    );
}

export function MerchantSigninForm() {
    const [revealPassword, setRevealPassword] = useState(false);

    const form = useForm<MerchantLoginFormType>({
        mode: "onSubmit",
        resolver: zodResolver(MerchantLoginFormSchema),
    });

    const context = useContext<GlobalContextType | null>(GlobalContext);
    const merchantForm = context?.setMerchantForm;

    const { handleSubmit, control } = form;

    async function submitForm(data: MerchantLoginFormType) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
                <FormField
                    name="email"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="text-white bg-transparent border-white/35"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    name="password"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex items-center justify-between w-full">
                                    <FormLabel>Password</FormLabel>
                                    <Button
                                        variant="secondary"
                                        type="button"
                                        className="flex items-center gap-x-2"
                                        onClick={() =>
                                            setRevealPassword(!revealPassword)
                                        }
                                    >
                                        {revealPassword ? (
                                            <EyeSlashIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                        <span>Hide</span>
                                    </Button>
                                </div>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="text-white bg-transparent border-white/35"
                                        type={
                                            revealPassword ? "text" : "password"
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                                <FormDescription className="text-white/90">
                                    Password must be at least 8 characters long
                                    and contain at least one letter and one
                                    number.
                                </FormDescription>
                            </FormItem>
                        );
                    }}
                />

                <div className="flex items-center gap-x-3">
                    <Button variant="primary" className="h-9 px-5">
                        Log in
                    </Button>
                    <span className="block">
                        Don't have an account?{" "}
                        <span
                            className="text-textSecondary underline cursor-pointer"
                            onClick={() =>
                                merchantForm && merchantForm("signup")
                            }
                        >
                            Sign up
                        </span>
                    </span>
                </div>
            </form>
        </Form>
    );
}
