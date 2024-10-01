import {
    MerchantSignupForm,
    MerchantSigninForm,
} from "@/components/onboarding-auth/merchant-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import logoLg from "@/assets/logo-lg.svg";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth, useGlobal } from "@/hooks/use-contexts";
import { twMerge } from "tailwind-merge";
import BackButton from "@/components/global/back-button";

export default function MerchantAuth() {
    const { form, setForm } = useGlobal();

    const { userLoggedIn } = useAuth();

    useEffect(() => {
        return () => {
            setForm("signup");
        };
    }, []);

    if (userLoggedIn) {
        return <Navigate to="/dashboard" replace={true} />;
    }

    return (
        <>
            <div className="w-full lg:max-w-6xl ml-4 lg:ml-8 mt-6 lg:fixed top-10">
                <BackButton />
            </div>
            <section className="lg:mb-0 lg:flex items-center justify-between gap-x-6 w-full lg:max-w-6xl lg:mx-auto h-full px-2 lg:px-3">
                <div className="items-center gap-x-2 justify-center hidden lg:flex">
                    <img src={logoLg} alt="Cryptflex" className="" />
                    <h1 className="text-textSecondary font-bold text-6xl">
                        Cryptflex
                    </h1>
                </div>
                <div
                    className={twMerge(
                        "lg:w-[50%] lg:h-[80%] overflow-y-auto no-scrollbar transition-all duration-300 ",
                        form == "login" && "lg:h-auto"
                    )}
                >
                    {form == "signup" && (
                        <Card className="bg-white/[.07] rounded-2xl text-white border-white/35 my-8 lg:mb-0 mx-auto max-w-lg lg:max-w-none">
                            <CardHeader>
                                <CardTitle className="text-xl font-medium">
                                    Sign up now
                                </CardTitle>
                                <CardDescription className="text-white">
                                    Fill the form to get started as a merchant
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="max-w-md lg:max-w-none">
                                    <MerchantSignupForm />
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    {form == "login" && (
                        <Card className="bg-white/[.07] rounded-2xl text-white border-white/35 mt-10 mx-auto max-w-lg lg:max-w-none">
                            <CardHeader>
                                <CardTitle className="text-xl font-medium">
                                    Welcome back
                                </CardTitle>
                                <CardDescription className="text-white">
                                    Login to access account
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="max-w-md lg:max-w-none">
                                    <MerchantSigninForm />
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </section>
        </>
    );
}
