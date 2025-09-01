"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Datum = { label: string; value: number };

export default function CompactTrendChart({ data }: { data: Datum[] }) {
  return (
    <ChartContainer
      config={{
        value: { label: "Revenue", color: "hsl(var(--chart-1))" },
      }}
      className="h-[120px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 12, left: 12, bottom: 0 }}
        >
          <XAxis dataKey="label" hide />
          <YAxis hide />
          <ChartTooltip
            content={<ChartTooltipContent labelKey="value" nameKey="value" />}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={false}
            name="Revenue"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
