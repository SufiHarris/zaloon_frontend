import * as React from "react";
import { cn } from "@/lib/utils";

type IconInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  icon?: React.ReactNode;
};

export const IconInput = React.forwardRef<HTMLInputElement, IconInputProps>(
  ({ className, id, label, icon, ...props }, ref) => {
    return (
      <div className="grid gap-1">
        {label ? (
          <label htmlFor={id} className="ms-2 text-grey-5">
            {label}
          </label>
        ) : null}
        <div className="relative">
          {icon ? (
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted-foreground">
              {icon}
            </span>
          ) : null}
          <input
            id={id}
            ref={ref}
            className={cn(
              "h-12 w-full rounded-full border border-input bg-background-2",
              icon ? "pl-11 pr-4" : "px-4",
              "text-sm outline-none placeholder:text-muted-foreground",
              "focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-0",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);
IconInput.displayName = "IconInput";
