// import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

// Variantes pour le trigger du select
const selectTriggerVariants = cva(
    "inline-flex items-center justify-between px-4 py-2 border transition focus:outline-none focus:ring-2 focus:ring-offset-1",
    {
        variants: {
            variant: {
                outline: "border-gray-300",
                none: "border-none",
            },
            tone: {
                dark: "bg-gray-800 text-white hover:bg-gray-700",
                light: "bg-white text-black hover:bg-gray-100",
            },
            rounded: {
                sm: "rounded-sm",
                md: "rounded-md",
                xl: "rounded-xl",
            },
        },
        defaultVariants: {
            variant: "outline",
            tone: "dark",
            rounded: "md",
        },
    }
);

function Select({
    children,
    className,
    ...props
}: RadixSelect.SelectProps & { className?: string }) {
    return <RadixSelect.Root {...props}>{children}</RadixSelect.Root>;
}

function SelectTrigger({
    className,
    variant,
    tone,
    rounded,
    placeholder,
    children,
    ...props
}: RadixSelect.SelectTriggerProps &
    VariantProps<typeof selectTriggerVariants> & {
        placeholder?: string;
    }) {
    return (
        <RadixSelect.Trigger
            className={cn(
                selectTriggerVariants({ variant, tone, rounded }),
                className
            )}
            {...props}
        >
            {children ? (
                // Si l’utilisateur met son propre <SelectValue>, on le respecte
                children
            ) : (
                <RadixSelect.Value placeholder={placeholder} />
            )}

            <RadixSelect.Icon>
                <ChevronDownIcon />
            </RadixSelect.Icon>
        </RadixSelect.Trigger>
    );
}

function SelectContent({
    className,
    children,
    ...props
}: RadixSelect.SelectContentProps & { className?: string }) {
    return (
        <RadixSelect.Portal>
            <RadixSelect.Content
                className={cn(
                    "overflow-hidden bg-white border rounded-md shadow-md",
                    className
                )}
                {...props}
            >
                <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
            </RadixSelect.Content>
        </RadixSelect.Portal>
    );
}

const selectItemVariants = cva(
    "relative flex items-center px-4 py-2 cursor-pointer select-none hover:bg-gray-200",
    {
        variants: {
            tone: {
                dark: "text-white",
                light: "text-black",
            },
        },
        defaultVariants: {
            tone: "dark",
        },
    }
);

function SelectItem({
    children,
    className,
    tone,
    ...props
}: RadixSelect.SelectItemProps & VariantProps<typeof selectItemVariants>) {
    return (
        <RadixSelect.Item
            className={cn(selectItemVariants({ tone }), className)}
            {...props}
        >
            <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
            <RadixSelect.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                <CheckIcon />
            </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
    );
}

export { Select, SelectTrigger, SelectContent, SelectItem };
