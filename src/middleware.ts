import { NextResponse, NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  // TODO Add logic to check if user is logged in

  // const isAuthenticated = (request.cookies.get('connect.sid'))
  const isAuthenticated = true;
  if (!isAuthenticated) {
    const loginUrl = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(loginUrl.toString());
  }
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|authentication|login|signup|verification|forgot|reset|apps).*)",
  ],
};
