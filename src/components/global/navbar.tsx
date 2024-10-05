import { Link } from "react-router-dom";
import Button from "./button-primary";
import { Button as SecButton } from "../ui/button";
import Logo from "../svg-components/logo";
import {
    Bars3BottomRightIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigation } from "@/hooks/use-navigate";
import { useAuth } from "@/hooks/use-contexts";
import { getInitials } from "@/lib/utils";

function Navbar() {
    const [navToggle, setNavToggle] = useState(false);
    const mobileMenuRef = useRef(null);

    const { navigate } = useNavigation();

    const { userFullData, userLoggedIn } = useAuth();

    useGSAP(() => {
        if (navToggle) {
            gsap.to(mobileMenuRef.current, {
                opacity: 1,
                duration: 0.7,
                ease: "power3.inOut",
                css: { bottom: "-17rem" },
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power3.inOut",
                css: { bottom: "17rem" },
            });
        }
    }, [navToggle]);

    return (
        <nav className="flex justify-between mx-auto bg-white max-w-2xl w-[90%] rounded-[5rem]  relative">
            <div className="flex items-center justify-between p-4 w-full">
                <div className="text-xl font-bold">
                    <Link
                        to="/"
                        className="text-[#1E40AF] flex items-center space-x-2"
                    >
                        <Logo />
                        <span>Cryptflex</span>
                    </Link>
                </div>
                <div className="hidden items-center gap-8 xl:flex">
                    <Link to="/" className="text-sm font-medium text-gray-700">
                        Home
                    </Link>
                    <Link
                        to="/dashboard"
                        className="text-sm font-medium text-gray-700"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/faq"
                        className="text-sm font-medium text-gray-700"
                    >
                        FAQ
                    </Link>
                </div>
                {userLoggedIn && (
                    <Button
                        variant="plain"
                        className="text-black px-6 rounded-full  hover:bg-white/[.07] h-10 hidden xl:block"
                        onClick={() => {
                            navigate("/dashboard");
                        }}
                    >
                        {getInitials(userFullData?.displayName)}
                    </Button>
                )}
                {!userLoggedIn && (
                    <Button
                        variant="primary"
                        className="h-10 hidden xl:block px-6"
                        onClick={() => {
                            navigate("/onboarding");
                        }}
                    >
                        Get Started
                    </Button>
                )}

                {/* Mobile Menu Toggle */}
                <SecButton
                    aria-label="mobile navigation toggle"
                    variant="ghost"
                    className="text-textSecondary xl:hidden hover:text-textSecondary"
                    onClick={() => setNavToggle(!navToggle)}
                >
                    <Bars3BottomRightIcon className="w-10 h-10" />
                </SecButton>

                {/* Mobile Menu Tray */}
                <div
                    ref={mobileMenuRef}
                    className="absolute w-full bg-white/95 rounded-md -bottom-[17rem] z-10 -left-0 p-4 text-textSecondary flex flex-col space-y-7 xl:hidden "
                    id="mobile-menu"
                >
                    <div className="ml-auto max-w-max">
                        <Link
                            to="/"
                            className="flex items-center space-x-4 max-w-max"
                            onClick={() => setNavToggle(false)}
                        >
                            <span className="font-semibold text-2xl">Home</span>
                            <ChevronRightIcon className="w-6 h-6" />
                        </Link>
                    </div>
                    <div className="ml-auto max-w-max">
                        <Link
                            to="/dashboard"
                            className="flex items-center space-x-4 max-w-max"
                            onClick={() => setNavToggle(false)}
                        >
                            <span className="font-semibold text-2xl">
                                Dashboard
                            </span>
                            <ChevronRightIcon className="w-6 h-6" />
                        </Link>
                    </div>
                    <div className="ml-auto max-w-max">
                        <Link
                            to="/faq"
                            className="flex items-center space-x-4 max-w-max"
                            onClick={() => setNavToggle(false)}
                        >
                            <span className="font-semibold text-2xl">FAQ</span>
                            <ChevronRightIcon className="w-6 h-6" />
                        </Link>
                    </div>
                    {userLoggedIn && (
                        <Button
                            variant="plain"
                            className="text-black px-6 rounded-full  hover:bg-white/[.07] h-11"
                            onClick={() => {
                                navigate("/dashboard");
                            }}
                        >
                            Go to Dashboard
                        </Button>
                    )}
                    {!userLoggedIn && (
                        <Button
                            variant="primary"
                            className="h-11 px-6"
                            onClick={() => {
                                navigate("/onboarding");
                                setNavToggle(false);
                            }}
                        >
                            Get Started
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
