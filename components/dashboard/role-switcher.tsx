"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentType } from "react";

type Option = {
  value: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
};

export default function RoleSwitcher({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  options: Option[];
}) {
  return (
    <div
      role="tablist"
      aria-label="Select tenant type"
      className="inline-flex items-center gap-1 rounded-lg border bg-background p-1"
    >
      {options.map((opt) => {
        const ActiveIcon = opt.icon;
        const active = value === opt.value;
        return (
          <Button
            key={opt.value}
            role="tab"
            aria-selected={active}
            variant={active ? "default" : "ghost"}
            onClick={() => onChange(opt.value)}
            className={cn(
              "h-9 gap-2 rounded-md px-3",
              active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            )}
          >
            {ActiveIcon ? (
              <ActiveIcon
                className={cn(
                  "size-4",
                  active ? "text-primary-foreground" : "text-primary"
                )}
              />
            ) : null}
            <span className="text-sm">{opt.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
