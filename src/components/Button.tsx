import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"


const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium transition disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				solid: "",
				outline: "border",
				ghost: "bg-transparent",
			},
			size: {
				default: "h-9 px-4",
				sm: "h-8 px-3 text-sm",
				lg: "h-10 px-6 text-lg",
				icon: "size-9",
			},
			tone: {
				primary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90",
				secondary: "bg-gray-700 text-white hover:bg-gray-600",
				danger: "bg-red-600 text-white hover:bg-red-700",
				success: "bg-green-600 text-white hover:bg-green-700",
				none: ""
			},
			rounded: {
				default: "rounded-md",      // arrondi standard
				full: "rounded-full",       // complètement rond
				none: "rounded-none",       // pas d'arrondi
				sm: "rounded-sm",           // petit arrondi
				lg: "rounded-lg",           // grand arrondi
				xl: "rounded-xl",           // très grand arrondi
				"2xl": "rounded-2xl",       // extra arrondi
				"3xl": "rounded-3xl",       // encore plus
			},

		},
		defaultVariants: {
			variant: "solid",
			size: "default",
			tone: "primary",
			rounded: "default",
		},
	}
)


function Button({
	className,
	variant,
	size,
	tone,
	rounded,
	color,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, tone, rounded }), color && color !== "none" && `bg-${color}`, "cursor-pointer", className)}
			{...props}
		/>
	)
}

export { Button, buttonVariants }