import * as React from "react";
import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

// Variantes pour l'input
const inputVariants = cva(
  "px-4 py-2 border transition focus:outline-none focus:ring-2 focus:ring-offset-1",
  {
    variants: {
      variant: {
        outline: "border-gray-300",
        underline: "border-b-2 border-gray-300 rounded-none",
        none: "border-none",
      },
      tone: {
        dark: "bg-gray-800 text-white placeholder-gray-400 focus:ring-purple-500",
        light: "bg-white text-black placeholder-gray-500 focus:ring-blue-500",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        xl: "rounded-xl",
      },
      inputSize: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "outline",
      tone: "light",
      rounded: "md",
      inputSize: "md",
    },
  }
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

function Input({ className, variant, tone, rounded, inputSize, ...props }: InputProps) {
  return (
    <input
      className={cn(inputVariants({ variant, tone, rounded, inputSize }), className)}
      {...props}
    />
  );
}

function InputLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("block text-sm font-medium mb-1", className)}
      {...props}
    />
  );
}

function InputError({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-red-500 text-sm mt-1", className)}
      {...props}
    />
  );
}

function InputWrapper({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

export { Input, InputLabel, InputError, InputWrapper };
