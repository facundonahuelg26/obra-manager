import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  const session = await auth() // Obtiene la sesión del usuario
  const { pathname } = req.nextUrl

  if (
    !session &&
    (pathname === '/projects' ||
      pathname === '/calculate-materials' ||
      pathname === '/project-analytics' ||
      pathname === '/profile')
  ) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Si el usuario está autenticado y está en /login o /, redirigir a proyectos
  if (session && (pathname === '/login' || pathname === '/')) {
    return NextResponse.redirect(new URL('/projects', req.url))
  }

  return NextResponse.next()
}

// Definir las rutas protegidas
export const config = {
  matcher: [
    '/',
    '/login',
    '/projects/:path*',
    '/calculate-materials/:path*',
    '/project-analytics/:path*',
    '/profile/:path*',
  ],
}
