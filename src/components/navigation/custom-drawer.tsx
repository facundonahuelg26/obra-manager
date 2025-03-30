import { ROUTES } from '@/utils'
import { Link } from '@heroui/link'

export default function CustomDrawer() {
  return (
    <aside className='bg-background border-r-1 border-default hidden lg:flex w-64 fixed top-16 left-0 h-[calc(100vh-64px)] p-6'>
      <nav className='flex flex-col gap-4'>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link href={ROUTES.DASHBOARD} color='foreground'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href={ROUTES.CONFIGURE_PROFILE} color='foreground'>
              Configurar Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
