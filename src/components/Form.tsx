import * as React from "react";
import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Input, InputLabel, InputError, InputWrapper } from "./Input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./Select";

// Form Wrapper
function Form({ className, children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </form>
  );
}

// Form Field Wrapper
function FormField({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

// Form Label
function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <InputLabel className={className} {...props} />;
}

// Form Input
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
function FormInput({ ...props }: FormInputProps) {
  return <Input {...props} />;
}

// Form Error
function FormError({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <InputError className={className} {...props}>{children}</InputError>;
}

// Form Helper Text
function FormHelperText({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-gray-500 text-sm mt-1", className)} {...props}>
      {children}
    </div>
  );
}

// Form Select (optionnel)
interface FormSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}
function FormSelect({ value, onValueChange, children }: FormSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger />
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}

export {
  Form,
  FormField,
  FormLabel,
  FormInput,
  FormError,
  FormHelperText,
  FormSelect,
  SelectItem,
};
