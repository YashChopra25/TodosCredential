import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Getting cookies from the request using the `RequestCookies` API
    let token = request.cookies.get('token')
    const path = request.nextUrl.pathname;
    const isPublicPath = (path === "/signin" || path === "/signup")
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }
}
export const config = {
    matcher: ['/', '/signin', '/signup'],
}