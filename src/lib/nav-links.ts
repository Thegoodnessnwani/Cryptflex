import {
    BagIcon,
    CalculatorIcon,
    CardTickIcon,
    DashboardIcon,
    DiagramIcon,
    NoteIcon,
    SettingIcon,
    SMSIcon,
    UserIcon,
    WalletCheckIcon,
} from "@/components/svg-components/icons";

export const buyerLinks = [
    { to: "/dashboard", label: "Overview", icon: DashboardIcon },
    { to: "/buyer/account", label: "Account", icon: UserIcon },
    {
        to: "/buyer/installments",
        label: "Installments",
        icon: CalculatorIcon,
    },
    { to: "/buyer/order-history", label: "Order History", icon: NoteIcon },
    { to: "/buyer/settings", label: "Settings", icon: SettingIcon },
];

export const merchantLinks = [
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
];