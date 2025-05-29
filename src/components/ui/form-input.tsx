import React from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <Input
          ref={ref}
          className={cn(error && "border-red-500", className)}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
