import { twMerge } from "tailwind-merge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";

type GlobalDialogProps = {
    title: string;
    description: string;
    containerClassname?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
};

export default function GlobalDialog({
    title,
    description,
    children,
    containerClassname,
    isOpen,
    onOpenChange,
}: GlobalDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent
                className={twMerge(
                    "space-y-4 rounded-xl bg-black md:min-w-[600px] max-h-[600px] overflow-y-auto px-3 sm:px-4 w-[90%] no-scrollbar",
                    containerClassname
                )}
            >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}
