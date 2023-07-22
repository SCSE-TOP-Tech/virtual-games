// import { NextResponse } from "next/server";
//
// export default async function middleware(req) {
//   const { pathname } = req.nextUrl;
//
//   if (!pathname.endsWith("/")) {
//     return NextResponse.redirect(new URL("/api/auth/signin", req.url));
//   }
// }
//
// export const config = {
//   matcher: ["/((?!register|api|login).*)"],
// };

export { default } from "next-auth/middleware";

export const config = { matcher: ["/"] };
