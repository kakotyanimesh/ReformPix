import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export const ButtonVariants = cva(
    "w-fit disabled:cursor-none whitespace-nowrap font-semibold disabled:opacity-40 transition-all ease-out text-sm font-semibold  rounded-md cursor-pointer",
    {
        variants: {
            variants: {
                primary: "bg-foreground text-background hover:bg-foreground/80",
                secondary: "text-foreground-light hover:bg-foreground-light/20",
                outline : "border border-foreground-light/40 hover:bg-foreground-light/20",
                transparent: "hover:bg-foreground-light/10"
            },
            sizes : {
                "default": "px-3 py-2",
                "primary" : "py-2 px-5"
            }
        },
        defaultVariants: {
            variants: "primary",
            sizes : "default"
        },
    }
);

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof ButtonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variants, sizes, asChild, ...props }, ref) => {
        const SlopComp = asChild ? Slot : "button";
        return (
            <SlopComp
                className={cn(ButtonVariants({ variants, sizes }), className, " ")}
                {...props}
                ref={ref}
            />
        );
    }
);

Button.displayName = "button";
