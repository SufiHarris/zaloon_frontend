"use client";

type Review = { name: string; stars: number; message: string };

export default function Reviews({ items }: { items: Review[] }) {
  if (!items?.length) {
    return <p className="text-sm text-muted-foreground">No reviews yet.</p>;
  }
  return (
    <ul className="space-y-3">
      {items.map((r, i) => (
        <li key={i} className="rounded-md border p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-medium">{r.name}</span>
            <Stars count={r.stars} />
          </div>
          <p className="text-sm text-muted-foreground">{r.message}</p>
        </li>
      ))}
    </ul>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div
      aria-label={`${count} out of 5 stars`}
      className="flex items-center gap-0.5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-accent" : "text-muted-foreground"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
