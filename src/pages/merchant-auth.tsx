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
// import Logo from "@/components/svg-components/logo";
import logoLg from "@/assets/logo-lg.svg";
import { GlobalContext, GlobalContextType } from "@/contexts/global-context";
import { useContext, useEffect } from "react";

export default function MerchantAuth() {
    const context = useContext<GlobalContextType | null>(GlobalContext);
    const merchantForm = context?.merchantForm;

    useEffect(() => {
        return () => {
            context?.setMerchantForm("signup");
        };
    }, []);
    return (
        <section className="mb-8 lg:flex items-center justify-between gap-x-6 w-full lg:max-w-6xl lg:mx-auto">
            <div className="flex items-center gap-x-2 justify-center ">
                <img src={logoLg} alt="Cryptflex" className="hidden lg:block" />
                <h1 className="text-textSecondary font-bold text-6xl">
                    Cryptflex
                </h1>
            </div>
            <div className="lg:w-[50%]">
                {merchantForm == "signup" && (
                    <Card className="bg-white/[.07] rounded-2xl text-white border-white/35 mt-10 mx-auto max-w-md lg:max-w-none">
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

                {merchantForm == "login" && (
                    <Card className="bg-white/[.07] rounded-2xl text-white border-white/35 mt-10 mx-auto max-w-md lg:max-w-none">
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
    );
}
