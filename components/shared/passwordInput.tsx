"use client";

import * as React from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
};

export function PasswordInput({
  className,
  label = "Password",
  id,
  ...props
}: PasswordInputProps) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="ms-2 text-grey-4">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted-foreground">
          <Lock className="h-4 w-4" aria-hidden />
        </span>
        <input
          id={id}
          type={show ? "text" : "password"}
          className={cn(
            "h-12 w-full rounded-full border border-input bg-background-2 pl-11 pr-11 text-sm outline-none",
            "placeholder:text-muted-foreground",
            "focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          placeholder="Password"
          autoComplete="current-password"
          {...props}
        />
        <button
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-2 inline-flex items-center rounded-full p-2 text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
