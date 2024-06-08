import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(path);

  const isPublicPath = path === '/signup' || path === '/login';
  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) return NextResponse.redirect(new URL('/issue-board', request.nextUrl));

  if (!isPublicPath && !token) return NextResponse.redirect(new URL('/login', request.nextUrl));
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/issue-board',
    '/profile',
    '/signup',
    '/login',
  ],
}