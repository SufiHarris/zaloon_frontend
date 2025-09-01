"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Scissors,
  CakeSlice,
  CalendarCheck2,
  ShoppingBag,
  Coins,
  Star,
  AlertTriangle,
  Plus,
  CalendarDays,
  PackagePlus,
  Percent,
} from "lucide-react";

import RoleSwitcher from "@/components/dashboard/role-switcher";
import KPICards from "@/components/dashboard/kpi-cards";
import QuickActions from "@/components/dashboard/quick-actions";
import Appointments from "@/components/dashboard/appointments";
import Orders from "@/components/dashboard/orders";
import LowStock from "@/components/dashboard/low-stock";
import Reviews from "@/components/dashboard/reviews";

type TenantType = "salon" | "bakery";

export default function Page() {
  const [tenant, setTenant] = useState<TenantType>("salon");

  const { kpis, trend, appointments, orders, lowStock, reviews } =
    useMemo(() => {
      if (tenant === "salon") {
        return {
          kpis: [
            {
              label: "Today’s Bookings",
              value: "18",
              icon: CalendarCheck2,
              tone: "teal" as const,
              delta: "+12%",
            },
            {
              label: "Revenue",
              value: "$1,840",
              icon: Coins,
              tone: "teal" as const,
              delta: "+6%",
            },
            {
              label: "Avg. Rating",
              value: "4.8",
              icon: Star,
              tone: "amber" as const,
            },
            {
              label: "New Clients",
              value: "5",
              icon: Scissors,
              tone: "teal" as const,
            },
          ],
          trend: [
            { label: "Mon", value: 220 },
            { label: "Tue", value: 180 },
            { label: "Wed", value: 260 },
            { label: "Thu", value: 230 },
            { label: "Fri", value: 310 },
            { label: "Sat", value: 350 },
            { label: "Sun", value: 270 },
          ],
          appointments: [
            {
              time: "09:00",
              client: "Ava Johnson",
              service: "Haircut + Style",
              notes: "Prefers layers",
            },
            {
              time: "10:30",
              client: "Liam Patel",
              service: "Beard Trim",
              notes: "Quick touch-up",
            },
            {
              time: "12:00",
              client: "Sophia Lee",
              service: "Coloring",
              notes: "Copper tone",
            },
            {
              time: "14:00",
              client: "Noah Smith",
              service: "Haircut",
              notes: "Fade",
            },
          ],
          orders: [],
          lowStock: [
            { item: "Shampoo (1L)", qty: 3 },
            { item: "Bleach Powder", qty: 2 },
            { item: "Gloves (M)", qty: 12 },
          ],
          reviews: [
            {
              name: "Maya",
              stars: 5,
              message: "Best cut I’ve had all year. Friendly staff!",
            },
            {
              name: "Chris",
              stars: 4,
              message: "Great experience, short wait time.",
            },
          ],
        };
      }
      return {
        kpis: [
          {
            label: "Today’s Orders",
            value: "42",
            icon: ShoppingBag,
            tone: "teal" as const,
            delta: "+9%",
          },
          {
            label: "Revenue",
            value: "$920",
            icon: Coins,
            tone: "teal" as const,
            delta: "+4%",
          },
          {
            label: "Avg. Rating",
            value: "4.7",
            icon: Star,
            tone: "amber" as const,
          },
          {
            label: "New Customers",
            value: "11",
            icon: CakeSlice,
            tone: "teal" as const,
          },
        ],
        trend: [
          { label: "Mon", value: 120 },
          { label: "Tue", value: 140 },
          { label: "Wed", value: 110 },
          { label: "Thu", value: 150 },
          { label: "Fri", value: 180 },
          { label: "Sat", value: 210 },
          { label: "Sun", value: 160 },
        ],
        appointments: [],
        orders: [
          {
            time: "08:45",
            customer: "Olivia",
            item: "Sourdough x2",
            notes: "Slice one loaf",
          },
          {
            time: "09:30",
            customer: "Ethan",
            item: "Croissants x6",
            notes: "Boxed",
          },
          {
            time: "10:15",
            customer: "Zoe",
            item: "Birthday Cake 8”",
            notes: "Pick-up at noon",
          },
          {
            time: "11:20",
            customer: "Leo",
            item: "Bagels x12",
            notes: "Mixed",
          },
        ],
        lowStock: [
          { item: "Strong Flour (kg)", qty: 6 },
          { item: "Butter (blocks)", qty: 8 },
          { item: "Yeast (sachets)", qty: 10 },
        ],
        reviews: [
          {
            name: "Isabella",
            stars: 5,
            message: "The almond croissant is amazing!",
          },
          { name: "Raj", stars: 4, message: "Great bread, friendly staff." },
        ],
      };
    }, [tenant]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6">
      <header className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">
            {tenant === "salon"
              ? "Salon Tenant Dashboard"
              : "Bakery Tenant Dashboard"}
          </h1>
          <p className="text-muted-foreground">
            A clean overview with quick actions and essentials at a glance.
          </p>
        </div>
        <RoleSwitcher
          value={tenant}
          onChange={(val) => setTenant(val as TenantType)}
          options={[
            { value: "salon", label: "Salon", icon: Scissors },
            { value: "bakery", label: "Bakery", icon: CakeSlice },
          ]}
        />
      </header>

      <section aria-label="Key metrics" className="mb-6 md:mb-8">
        <KPICards kpis={kpis} trend={trend} />
      </section>

      <section aria-label="Quick actions" className="mb-6 md:mb-8">
        <QuickActions
          primary={[
            tenant === "salon"
              ? { label: "New Appointment", icon: Plus }
              : { label: "New Order", icon: Plus },
            { label: "Promotions", icon: Percent },
          ]}
          secondary={[
            { label: "Calendar", icon: CalendarDays },
            { label: "Inventory", icon: PackagePlus },
          ]}
        />
      </section>

      <section className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-balance">
                {tenant === "salon" ? "Today’s Appointments" : "Today’s Orders"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {tenant === "salon" ? (
                <Appointments items={appointments} />
              ) : (
                <Orders items={orders} />
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 md:space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle
                  className="size-4 text-amber-500"
                  aria-hidden="true"
                />
                Low Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LowStock items={lowStock} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="size-4 text-amber-500" aria-hidden="true" />
                Latest Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Reviews items={reviews} />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      <footer className="text-xs text-muted-foreground">
        Color system used: Teal (primary), Amber (accent), White, Near-black,
        Gray. Minimal chart usage.
      </footer>
    </main>
  );
}
