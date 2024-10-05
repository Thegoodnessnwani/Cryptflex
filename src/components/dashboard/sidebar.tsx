import { useEffect, useMemo, useRef } from "react";
import { HeaderProps } from "./header";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import Logo from "../svg-components/logo";
import Button from "../global/button-primary";
import {
    XMarkIcon,
    WalletIcon,
    CheckCircleIcon,
    ClipboardIcon,
} from "@heroicons/react/24/outline";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { NavLink } from "react-router-dom";
import { signOutUser } from "@/firebase/auth";
// import solflareSVG from "@/assets/solflare.svg";
import {
    WalletConnectionDialog,
    WalletDisconnectDialog,
} from "./wallet-integration";
import { useAuth, useWallet } from "@/hooks/use-contexts";
import { useClipboard } from "@/hooks/use-clipboard";
import { useSOLPrice } from "@/hooks/use-sol-price";
import { buyerLinks, merchantLinks } from "@/lib/nav-links";
import { LogoutIcon } from "../svg-components/icons";

type SidebarProps = Pick<HeaderProps, "user"> & {
    isOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({ user, isOpen, onClose }: SidebarProps) {
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const { isWalletConnected, publicKey, balance } = useWallet();

    const { isCopied, copyToClipboard } = useClipboard();

    const { currentUser } = useAuth();

    const truncatedAddress = publicKey
        ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`
        : "";

    const handleCopy = () => {
        if (publicKey) {
            copyToClipboard(publicKey);
        }
    };

    const {
        price: solPrice,
        loading: priceLoading,
        error: priceError,
    } = useSOLPrice();

    const balanceInUSD = balance && solPrice ? balance * solPrice : null;

    const links = useMemo(() => {
        return user?.role === "merchant" ? merchantLinks : buyerLinks;
    }, [user?.role]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            ref={sidebarRef}
            className={twMerge(
                "fixed inset-y-0 left-0 transform w-72 bg-black lg:bg-white/[.07] text-white transition-transform duration-300 ease-in-out z-30",
                "lg:sticky lg:top-0 lg:translate-x-0 lg:w-auto lg:flex-shrink-0 lg:min-w-96",
                "flex flex-col h-screen overflow-y-auto",
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}
        >
            <div className="flex items-center justify-between p-10">
                <Link to="/dashboard" className="flex items-center gap-x-3">
                    <Logo />
                    <span className="text-textSecondary font-bold block sm:text-lg md:text-xl">
                        Cryptflex
                    </span>
                </Link>
                <Button
                    variant="secondary"
                    className="lg:hidden"
                    onClick={onClose}
                >
                    <XMarkIcon className="w-5 h-5" />
                </Button>
            </div>

            <nav className="font-inter font-medium flex-grow">
                <ul className="space-y-3">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                onClick={() => onClose()}
                                className={({ isActive }) =>
                                    twMerge(
                                        "flex items-center space-x-4 pl-4 py-4",
                                        isActive
                                            ? "border-l-4 border-l-textSecondary bg-active-link-gradient"
                                            : "border-l-4 border-l-transparent"
                                    )
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <link.icon
                                            className={twMerge(
                                                "[&>path]:stroke-[#84828A]",
                                                isActive &&
                                                    "[&>path]:stroke-[#fff]"
                                            )}
                                        />
                                        <span
                                            className={
                                                isActive
                                                    ? "text-textPrimary"
                                                    : "text-[#84828A]"
                                            }
                                        >
                                            {link.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {isWalletConnected && (
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-lg shadow-lg text-white">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                            <WalletIcon className="w-6 h-6 mr-2" />
                            <span className="text-sm font-semibold">
                                Wallet Connected
                            </span>
                        </div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        className="h-8 w-8 text-white hover:text-white hover:bg-white/20"
                                        onClick={handleCopy}
                                    >
                                        {isCopied ? (
                                            <CheckCircleIcon className="h-4 w-4" />
                                        ) : (
                                            <ClipboardIcon className="h-4 w-4" />
                                        )}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent align="end">
                                    <p>
                                        {isCopied ? "Copied!" : "Copy address"}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="text-2xl font-bold mb-1">
                        {balance?.toFixed(4) || "0"} SOL
                    </div>
                    {balanceInUSD !== null && !priceLoading && !priceError && (
                        <div className="text-sm opacity-90 mb-2">
                            ≈ ${balanceInUSD.toFixed(2)} USD
                        </div>
                    )}
                    {priceLoading && (
                        <div className="text-sm opacity-75">
                            Loading USD value...
                        </div>
                    )}
                    {priceError && (
                        <div className="text-sm text-red-300">
                            Error loading USD value
                        </div>
                    )}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="text-xs opacity-75 truncate cursor-pointer">
                                    {truncatedAddress}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs">{publicKey}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <WalletDisconnectDialog />
                </div>
            )}

            {!isWalletConnected && (
                <WalletConnectionDialog
                    isOpen={Boolean(currentUser && !isWalletConnected)}
                />
            )}

            <div className="py-4">
                <Button
                    variant="secondary"
                    className="flex items-center space-x-4 pl-4 py-4 h-10  group hover:bg-transparent mt-4"
                    onClick={() => signOutUser()}
                >
                    <LogoutIcon className="w-5 h-5 group-hover:[&>path]:stroke-[#8d1909]" />
                    <span className="block text-[#84828A] group-hover:text-[#8d1909]">
                        Logout
                    </span>
                </Button>
            </div>
        </div>
    );
}
