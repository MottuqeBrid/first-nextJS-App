import { NextRequest, NextResponse } from "next/server";
export default function middleware(request) {
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith("/registration")) {
      return NextResponse.next(); // Allow "/registration" to load normally
    }
  return NextResponse.redirect(new URL("/registration", request.url));
}

// export default middleware;

export const config = {
  matcher: "/class/:path*",
};

// export function middleware(request) {
//   const pathname = request.nextUrl.pathname;

//   if (pathname.startsWith("/registration")) {
//     return NextResponse.next(); // Allow "/registration" to load normally
//   }

//   return NextResponse.redirect(new URL("/registration", request.url));
// }

// export const config = {
//   matcher: "/class/:path*",
// };
