import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const defaultLocale = 'es'
  const cookieStore = await cookies() // Obtener las cookies correctamente
  const locale = cookieStore.get('NEXT_LOCALE')?.value || defaultLocale
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
