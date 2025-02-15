import { NextResponse } from 'next/server';

// do not require authentication
const publicRoutes = ['/', '/auth/login', '/auth/signup', '/public'];

export function middleware(req) {
  const url = req.url;
  const cookie = req.cookies.get('authToken'); 

  // allow the request to proceed
  if (publicRoutes.some(route => url.includes(route))) {
    return NextResponse.next();
  }

  // If the user is authenticated
  if (cookie) {
    return NextResponse.next();
  }

  // Otherwise,
  return NextResponse.redirect(new URL('/login', url));
}
