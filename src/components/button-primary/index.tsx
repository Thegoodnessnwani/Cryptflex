import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Button as BaseButton } from "../ui/button";

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: "primary" | "secondary" | "danger" | "plain";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <BaseButton
                ref={ref}
                {...props}
                className={cn(buttonVariants({ variant, size }), className)}
            />
        );
    }
);

Button.displayName = "Button";

const buttonVariants = cva(
    "font-medium rounded-md hover:opacity-80 active:opacity-100",
    {
        variants: {
            variant: {
                primary:
                    "primary-btn-gradient text-white rounded-[2.04594rem] py-[0.488rem] px-[0.97606rem]",
                secondary: "bg-sec-gray text-white",
                danger: "bg-deep-red text-white",
                plain: "bg-white text-black border",
            },
            size: {
                sm: "h-8 px-[10px]",
                md: "h-12 px-[14px]",
                lg: "h-16 px-[18px]",
            },
        },
        defaultVariants: {
            variant: "plain",
            size: "sm",
        },
    }
);

export default Button;
