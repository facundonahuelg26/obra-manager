// app/providers.tsx
'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'
import { ToastProvider } from '@heroui/toast'
// Only if using TypeScript
declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <ToastProvider
          toastProps={{
            // radius: "full",
            // color: "primary",
            variant: 'bordered',
            timeout: 2000,
            // hideIcon: true,
          }}
        />
        <SessionProvider>{children}</SessionProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  )
}
