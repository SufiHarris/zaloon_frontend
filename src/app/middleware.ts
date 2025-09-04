// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("auth-token")?.value;
//   const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
//   const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

//   // If user is authenticated and trying to access auth pages, redirect to dashboard
//   if (token && isAuthPage) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   // If user is not authenticated and trying to access protected routes, redirect to login
//   if (!token && isDashboard) {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/auth/:path*"],
// };
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authRoutes = ["/login", "/signup"];
const protectedRoutes = [
  "/dashboard",
  "/settings",
  "/profile",
  "/admin",
  "/manage-users",
  "/reports",
];
// const adminRoutes = ["/admin", "/manage-users", "/reports"];

function getUserRoleFromToken(
  token: string | undefined
): "admin" | "user" | null {
  if (!token) return null;
  if (token.includes("admin")) return "admin";
  return "user";
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;
  const { pathname } = request.nextUrl;
  const isAuthPage = authRoutes.some((route) => pathname.startsWith(route));
  // const isAdminOnly = adminRoutes.some((route) => pathname.startsWith(route));
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // if (!token && (isProtected || isAdminOnly)) {
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // if (token && isAdminOnly) {
  //   const role = getUserRoleFromToken(token);

  //   if (role !== "admin") {
  //     return NextResponse.redirect(new URL("/admin", request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth",
    "/auth/:path*",
    "/dashboard/:path*",
    "/settings/:path*",
    "/profile/:path*",
    "/admin/:path*",
    "/manage-users/:path*",
    "/reports/:path*",
  ],
};
