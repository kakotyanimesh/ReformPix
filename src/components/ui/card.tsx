import { cn } from "@/lib/cn";
import React, { HTMLAttributes } from "react";

export const Card = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
    return (
        <div className={cn("border-foreground-light", className)}{...props} ref={ref}/>
    )
})


Card.displayName = "card"