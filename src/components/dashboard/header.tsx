import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { twMerge } from "tailwind-merge";
import { DocumentData } from "firebase/firestore";
import { getInitials } from "@/lib/utils";
import BellIconWithNotification from "./bell-icon-with-notification";
import { SidebarIcon } from "lucide-react";

export type HeaderProps = {
    user: DocumentData | undefined;
    onMenuClick: () => void;
};

export default function Header({ user, onMenuClick }: HeaderProps) {
    return (
        <header className="bg-white/[.07] text-white p-4 lg:p-6 flex justify-between items-center gap-x-5 lg:gap-x-0">
            <div className="flex items-center">
                <Button
                    variant={"ghost"}
                    className="mr-4 lg:hidden hover:bg-inherit"
                    onClick={onMenuClick}
                >
                    <SidebarIcon className="w-5 h-5" />
                </Button>
                <div className="border-white/20 bg-white/[.07] rounded-full py-2 px-3 relative">
                    <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <Input
                        type="text"
                        placeholder="Search products"
                        className="bg-transparent text-white px-10 rounded-full md:w-64 placeholder:text-white/70 border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none py-0 h-8 pr-0"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 rounded-full border-[0.627px] border-white/20 px-[.5rem] md:px-[1rem] py-[0.4rem] bg-white/[0.07]">
                    <Avatar className={twMerge("w-[1.85rem] h-[1.85rem]")}>
                        <AvatarImage
                            src={`${user?.photoURL}`}
                            alt="@pravatar"
                        />
                        <AvatarFallback className="text-white bg-backgroundColorPrimary">
                            {getInitials(user?.displayName)}
                        </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">
                        {user?.displayName}
                    </span>
                </div>
                <Button
                    variant={"ghost"}
                    className="p-3 rounded-full border-[0.627px] border-white/20  bg-white/[0.07] hover:bg-inherit hover:text-inherit"
                >
                    <BellIconWithNotification hasNotification={true} />
                </Button>
                {/* <Button
                    className="rounded-full border-[0.627px] border-white/20 p-3 bg-white/[0.07]"
                    variant={"ghost"}
                >
                    <XCircleIcon className="w-6 h-6" />
                </Button> */}
            </div>
        </header>
    );
}
