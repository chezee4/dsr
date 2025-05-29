import React from "react";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({ error, className, ...props }, ref) => {
  return (
    <div className="space-y-1">
      <Textarea
        ref={ref}
        className={cn(error && "border-red-500", className)}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

FormTextarea.displayName = "FormTextarea";
