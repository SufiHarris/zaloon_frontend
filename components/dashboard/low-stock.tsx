"use client";

import { AlertTriangle } from "lucide-react";

type Item = { item: string; qty: number };

export default function LowStock({ items }: { items: Item[] }) {
  if (!items?.length) {
    return (
      <p className="text-sm text-muted-foreground">
        All inventory looks healthy.
      </p>
    );
  }
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex items-center justify-between rounded-md border p-3"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="size-4 text-accent" aria-hidden="true" />
            <span className="font-medium">{it.item}</span>
          </div>
          <span className="text-sm text-muted-foreground">{it.qty} left</span>
        </li>
      ))}
    </ul>
  );
}
