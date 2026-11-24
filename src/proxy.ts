import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Maintenance mode: set MAINTENANCE_MODE=true (e.g. in Vercel env vars) and every
 * page request is answered with the /maintenance page and a 503 status.
 */
export function proxy(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "true") return NextResponse.next();
  if (request.nextUrl.pathname === "/maintenance") return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url, { status: 503, headers: { "Retry-After": "3600" } });
}

export const config = {
  // Skip Next internals and static files (anything with an extension)
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
