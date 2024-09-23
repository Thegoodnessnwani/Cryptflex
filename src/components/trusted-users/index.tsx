import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import styles from "./style.module.css";
import { twMerge } from "tailwind-merge";

export default function TrustedUsers() {
    return (
        <section
            className={twMerge(
                "py-[0.5rem] px-[2rem] bg-backgroundColorPrimary max-w-max items-center space-x-3",
                styles.gradientBorder
            )}
        >
            <div className="flex -space-x-3">
                {Array.from({ length: 5 }).map(function renderTrustedUser(
                    _,
                    index
                ) {
                    return (
                        <Avatar
                            className={twMerge("w-[1.6825rem] h-[1.6825rem] ")}
                            key={index}
                        >
                            <AvatarImage
                                src={`https://i.pravatar.cc/${300 + index}`}
                                alt="@pravatar"
                            />
                            <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                    );
                })}
            </div>
            <span className="block text-sm">Trusted by 15k + users</span>
        </section>
    );
}
