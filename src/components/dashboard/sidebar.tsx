import { useEffect, useMemo, useRef } from "react";
import { HeaderProps } from "./header";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import Logo from "../svg-components/logo";
import Button from "../global/button-primary";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    BagIcon,
    CalculatorIcon,
    CardTickIcon,
    DashboardIcon,
    DiagramIcon,
    LogoutIcon,
    NoteIcon,
    SettingIcon,
    SMSIcon,
    UserIcon,
    WalletCheckIcon,
} from "../svg-components/icons";
import { NavLink } from "react-router-dom";
import { signOutUser } from "@/firebase/auth";

type SidebarProps = Pick<HeaderProps, "user"> & {
    isOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({ user, isOpen, onClose }: SidebarProps) {
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const buyerLinks = [
        { to: "/dashboard", label: "Overview", icon: DashboardIcon },
        { to: "/buyer/account", label: "Account", icon: UserIcon },
        {
            to: "/buyer/installments",
            label: "Installments",
            icon: CalculatorIcon,
        },
        { to: "/buyer/order-history", label: "Order History", icon: NoteIcon },
        { to: "/buyer/settings", label: "Settings", icon: SettingIcon },
        // Add more buyer-specific links
    ];

    const merchantLinks = [
        { to: "/dashboard", label: "Overview", icon: DashboardIcon },
        {
            to: "/merchant/product-management",
            label: "Product Management",
            icon: BagIcon,
        },
        {
            to: "/merchant/order-management",
            label: "Order Management",
            icon: WalletCheckIcon,
        },
        {
            to: "/merchant/payments-and-earnings",
            label: "Payments and Earnings",
            icon: CardTickIcon,
        },
        {
            to: "/merchant/analytics-and-reports",
            label: "Analytics and Reports",
            icon: DiagramIcon,
        },
        {
            to: "/merchant/inbox",
            label: "Inbox",
            icon: SMSIcon,
        },
        {
            to: "/merchant/settings",
            label: "Settings",
            icon: SettingIcon,
        },
        // Add more merchant-specific links
    ];

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
                "lg:relative lg:translate-x-0 lg:w-auto lg:flex-shrink-0 lg:min-w-80",
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}
        >
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center p-10">
                    <Link to="/dashboard" className="flex items-center gap-x-3">
                        <Logo />
                        <span className="text-textSecondary font-bold block sm:text-lg md:text-xl">
                            Cryptflex
                        </span>
                    </Link>
                </div>
                <Button
                    variant="secondary"
                    className="lg:hidden"
                    onClick={onClose}
                >
                    <XMarkIcon className="w-5 h-5" />
                </Button>
            </div>

            <nav className="font-inter font-medium">
                <ul className="space-y-3">
                    {links.map((link) => {
                        return (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
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
                        );
                    })}

                    <li className="fixed bottom-8">
                        <Button
                            variant="secondary"
                            className="flex items-center space-x-4 pl-4 py-4 h-10 w-full group hover:bg-transparent"
                            onClick={() => signOutUser()}
                        >
                            <LogoutIcon className="w-5 h-5 group-hover:[&>path]:stroke-[#8d1909]" />
                            <span className="block text-[#84828A] group-hover:text-[#8d1909]">
                                Logout
                            </span>
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
