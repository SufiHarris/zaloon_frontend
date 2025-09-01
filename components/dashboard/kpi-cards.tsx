"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompactTrendChart from "./compact-trend-chart";
import { cn } from "@/lib/utils";
import type { ComponentType } from "react";

type KPI = {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
  tone: "teal" | "amber";
  delta?: string;
};

export default function KPICards({
  kpis,
  trend,
}: {
  kpis: KPI[];
  trend: { label: string; value: number }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        const isRevenue = kpi.label.toLowerCase().includes("revenue");
        const isTeal = kpi.tone === "teal";
        return (
          <Card key={kpi.label}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.label}
                </CardTitle>
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-md border px-1.5 py-0.5 text-xs",
                    isTeal
                      ? "border-primary/20 text-primary"
                      : "border-accent/20 text-accent-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "mr-1 size-3.5",
                      isTeal ? "text-primary" : "text-accent"
                    )}
                    aria-hidden="true"
                  />
                  {isTeal ? "Active" : "Quality"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-semibold tracking-tight">
                  {kpi.value}
                </div>
                {kpi.delta ? (
                  <div className="text-xs text-primary">{kpi.delta}</div>
                ) : (
                  <div className="text-xs text-muted-foreground">—</div>
                )}
              </div>
              {isRevenue ? (
                <div className="pt-1">
                  <CompactTrendChart data={trend} />
                </div>
              ) : (
                <div className="h-[36px]" aria-hidden="true" />
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
