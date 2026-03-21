import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

const MEMBER_PATHS = [
  "/dashboard",
  "/videos",
  "/booking",
  "/events",
  "/knowledge",
  "/product-roadmap",
  "/feedback",
  "/community",
  "/onboarding",
];

export default auth((req) => {
  const isMembers = MEMBER_PATHS.some((p) =>
    req.nextUrl.pathname.startsWith(p)
  );

  if (isMembers && !req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/videos/:path*",
    "/booking/:path*",
    "/events/:path*",
    "/knowledge/:path*",
    "/product-roadmap/:path*",
    "/feedback/:path*",
    "/community/:path*",
    "/onboarding/:path*",
  ],
};
