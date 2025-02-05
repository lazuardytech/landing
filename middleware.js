import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/legal") {
    const url = request.nextUrl.clone();
    url.pathname = "/legal/privacy-policy";
    return NextResponse.redirect(url);
  }

  if (pathname === "/privacy") {
    const url = request.nextUrl.clone();
    url.pathname = "/legal/privacy-policy";
    return NextResponse.redirect(url);
  }

  if (pathname === "/terms") {
    const url = request.nextUrl.clone();
    url.pathname = "/legal/terms-of-service";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/legal", "/privacy", "/terms"],
};
