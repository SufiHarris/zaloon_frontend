"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/app/sidebar";
import Navbar from "./navbar";

const protectedRoutes = [
  "/dashboard",
  "/settings",
  "/profile",
  "/admin",
  "/manage-users",
  "/reports",
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (showSidebar) {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1">
          {/* Navbar */}
          <Navbar />

          {/* Page content with padding so it doesn't overlap navbar */}
          <div className="pt-14 ">{children}</div>
        </main>
      </div>
    );
  }

  return <main className="min-h-screen">{children}</main>;
}
