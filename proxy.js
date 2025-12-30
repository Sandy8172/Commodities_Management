import { NextResponse } from "next/server";
import { verifyToken } from "./utils/jwt"; // adjust path if needed

export function proxy(req) {
  const { pathname } = req.nextUrl;

  // Skip all API routes and static assets
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico)$/i)
  ) {
    return NextResponse.next();
  }

  // Public routes that don't need auth
  const publicRoutes = ["/login", "/signup"];
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Get token from cookies
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const result = verifyToken(token);
  if (!result.valid || result.expired) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = result.payload;

  // Role check for dashboard
  if (pathname.startsWith("/dashboard") && user?.role !== "manager") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

// Matcher: run on all routes except static assets
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
