import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export const ButtonVariants = cva(
    "w-fit disabled:cursor-none whitespace-nowrap font-semibold disabled:opacity-40 transition-all ease-out text-sm font-semibold px-3 py-2 rounded-md cursor-pointer",
    {
        variants: {
            variants: {
                primary: "bg-blue-900",
                secondary: "text-foreground-light hover:bg-foreground-light/20",
                outline : "border border-foreground-light/40 hover:bg-foreground-light/20"
            },
        },
        defaultVariants: {
            variants: "primary",
        },
    }
);

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof ButtonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variants, asChild, ...props }, ref) => {
        const SlopComp = asChild ? Slot : "button";
        return (
            <SlopComp
                className={cn(ButtonVariants({ variants }), className, " ")}
                {...props}
                ref={ref}
            />
        );
    }
);

Button.displayName = "button";
