"use client";

import { Badge } from "@/components/ui/badge";

type Appointment = {
  time: string;
  client: string;
  service: string;
  notes?: string;
};

export default function Appointments({ items }: { items: Appointment[] }) {
  if (!items?.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No appointments scheduled yet.
      </p>
    );
  }
  return (
    <ul className="divide-y">
      {items.map((a, i) => (
        <li key={i} className="flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium">{a.client}</span>
              <Badge variant="outline" className="text-xs">
                {a.service}
              </Badge>
            </div>
            {a.notes ? (
              <p className="truncate text-sm text-muted-foreground">
                {a.notes}
              </p>
            ) : null}
          </div>
          <time className="shrink-0 text-sm text-primary">{a.time}</time>
        </li>
      ))}
    </ul>
  );
}
