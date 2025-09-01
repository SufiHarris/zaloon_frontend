"use client";

import { Button } from "@/components/ui/button";
import type { ComponentType } from "react";

type Action = { label: string; icon?: ComponentType<{ className?: string }> };

export default function QuickActions({
  primary,
  secondary,
}: {
  primary: Action[];
  secondary: Action[];
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {primary.map((a) => {
          const Icon = a.icon;
          return (
            <Button
              key={a.label}
              className="gap-2 bg-primary text-primary-foreground hover:opacity-90"
            >
              {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
              {a.label}
            </Button>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {secondary.map((a) => {
          const Icon = a.icon;
          return (
            <Button
              key={a.label}
              variant="outline"
              className="gap-2 bg-transparent"
            >
              {Icon ? (
                <Icon className="size-4 text-primary" aria-hidden="true" />
              ) : null}
              {a.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
