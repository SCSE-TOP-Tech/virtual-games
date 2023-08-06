import { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!register|api|login).*)"],
};

export function middleware(request: NextRequest) {}
