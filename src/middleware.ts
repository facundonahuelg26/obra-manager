import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  const session = await auth() // Obtiene la sesión del usuario
  const { pathname } = req.nextUrl

  if (
    !session &&
    (pathname === '/dashboard' ||
      pathname === '/configure-profile' ||
      pathname === '/profile')
  ) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Si el usuario está autenticado y está en /login o /, redirigir al dashboard
  if (session && (pathname === '/login' || pathname === '/')) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

// Definir las rutas protegidas
export const config = {
  matcher: [
    '/',
    '/login',
    '/dashboard/:path*',
    '/configure-profile/:path*',
    '/profile/:path*',
  ],
}
