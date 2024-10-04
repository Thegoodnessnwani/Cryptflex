/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { toast } from "sonner";
import { registerUser, signInUser, signInWithGoogle } from "@/firebase/auth";
import { useGlobal } from "@/hooks/use-contexts";
import { getUserDoc } from "@/firebase/db";
import { useNavigation } from "@/hooks/use-navigate";
import googleLogo from "@/assets/google-logo.svg";

export function MerchantSignupForm() {
    const [revealPassword, setRevealPassword] = useState(false);

    const { setForm } = useGlobal();

    const form = useForm<MerchantSignupFormType>({
        mode: "onSubmit",
        resolver: zodResolver(MerchantSignupFormSchema),
        defaultValues: {
            termsOfUse: false,
            marketing: false,
            role: "merchant",
        },
    });

    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = form;

    async function submitForm(data: MerchantSignupFormType) {
        try {
            await registerUser(data);
            toast.success("User registered successfully");
        } catch (error: any) {
            console.error("Error registering user: " + error);
            toast.error(
                error.code || error.message || "Error registering user"
            );
        }
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
                                <FormLabel>Business name</FormLabel>
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
                    name="businessAddress"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Business address</FormLabel>
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
                                        <span>
                                            {revealPassword ? "Hide" : "Show"}
                                        </span>
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
                                        checked={field.value} // Ensure this is a boolean
                                        onCheckedChange={(checked) =>
                                            field.onChange(checked)
                                        }
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
                                        checked={field.value} // Ensure this is a boolean
                                        onCheckedChange={(checked) =>
                                            field.onChange(checked)
                                        }
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
                </div>

                <FormField
                    name="role"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem className="hidden">
                                <FormLabel>Role</FormLabel>
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

                <div className="flex items-center gap-x-3">
                    <Button
                        variant="primary"
                        className="h-9 px-5"
                        loading={isSubmitting}
                    >
                        Sign up
                    </Button>
                    <span className="block">
                        Already have an account?{" "}
                        <span
                            className="text-textSecondary underline cursor-pointer"
                            onClick={() => setForm("login")}
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

    const { setForm } = useGlobal();

    const { navigate } = useNavigation();

    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = form;

    async function submitForm(data: MerchantLoginFormType) {
        try {
            const res = await signInUser(data.email, data.password);
            console.log(res);
            toast.success("Signed in successfully");
        } catch (error: any) {
            console.error("Error signing in user: " + error);
            toast.error(error.code || error.message || "Error signing in user");
        }
    }

    async function handleGoogleSignin() {
        try {
            const user = await signInWithGoogle();
            const userDoc = await getUserDoc(user.uid);
            if (!userDoc.exists()) {
                await user.delete();
                navigate("/onboarding");
                toast.warning(
                    "User not found, please register either as a buyer or merchant first"
                );
                return;
            }
            toast.success("Signed in successfully");
        } catch (error: any) {
            console.error(error);
            toast.error(
                error.message ||
                    error.code ||
                    "Server be tripping fr fr! Try again later"
            );
        }
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
                                        <span>
                                            {revealPassword ? "Hide" : "Show"}
                                        </span>
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
                    <Button
                        variant="primary"
                        className="h-9 px-5"
                        loading={isSubmitting}
                    >
                        Log in
                    </Button>
                    <span className="block">
                        Don't have an account?{" "}
                        <span
                            className="text-textSecondary underline cursor-pointer"
                            onClick={() => setForm("signup")}
                        >
                            Sign up
                        </span>
                    </span>
                </div>

                <span className="block text-center font-semibold">OR</span>

                <Button
                    type="button"
                    variant="secondary"
                    className="flex items-center justify-center gap-x-3 h-12 border rounded-xl px-5 w-full"
                    onClick={handleGoogleSignin}
                >
                    <img
                        src={googleLogo}
                        alt={"Google signin"}
                        className="w-6"
                    />
                    <span>Continue with Google</span>
                </Button>
            </form>
        </Form>
    );
}
