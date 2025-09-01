"use client";

import { Badge } from "@/components/ui/badge";

type Order = {
  time: string;
  customer: string;
  item: string;
  notes?: string;
};

export default function Orders({ items }: { items: Order[] }) {
  if (!items?.length) {
    return (
      <p className="text-sm text-muted-foreground">No orders received yet.</p>
    );
  }
  return (
    <ul className="divide-y">
      {items.map((o, i) => (
        <li key={i} className="flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium">{o.customer}</span>
              <Badge variant="outline" className="text-xs">
                {o.item}
              </Badge>
            </div>
            {o.notes ? (
              <p className="truncate text-sm text-muted-foreground">
                {o.notes}
              </p>
            ) : null}
          </div>
          <time className="shrink-0 text-sm text-primary">{o.time}</time>
        </li>
      ))}
    </ul>
  );
}
