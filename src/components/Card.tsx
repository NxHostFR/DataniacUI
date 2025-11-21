import * as React from "react";

import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const cardVariant = cva(
    "p-6 text-center transition",
    {
        variants: {
            variant: {
                outline: "border",
                none: ""
            },
            tone: {
                dark: "bg-gray-800/50  border-gray-700 hover:border-purple-500",
                light: ""
            },
            rounded: {
                xl: "rounded-xl"
            }
        },
        defaultVariants: {
            variant: "outline",
            tone: "dark",
            rounded: "xl"
        }
    }
)

function Card({ className, variant, tone, rounded, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardVariant>) {
    return (
        <div 
            data-slot="card"
            className={cn(
                cardVariant({variant, tone, rounded}), className
            )}
            {...props}
        />
    )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn("mb-4", className)}
            {...props}
        />
    )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="card-title"
            className={cn("text-3xl font-bold mb-2", className)}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="card-description"
            className={cn("text-gray-400 text-sm", className)}
            {...props}
        />
    )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div 
            data-slot="card-content"
            className={cn(
                "p-6 pt-0", className
            )}
            {...props}
        />
    )
}

function CardIcon({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-icon"
            className={cn("text-purple-400 mb-3 flex justify-center", className)}
            {...props}
        />
    )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardIcon, cardVariant };