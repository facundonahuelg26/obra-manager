import { usePathname } from 'next/navigation'
import { menuData } from './menu-data'
import { useTranslations } from 'next-intl'
import NavList from './nav-list'

export default function CustomDrawer() {
  const t = useTranslations('Navigation')
  const items = menuData(t)
  const pathname = usePathname()
  return (
    <aside className='bg-background border-r-1 border-default hidden lg:flex w-64 fixed top-16 left-0 h-[calc(100vh-64px)] p-6'>
      <nav className='w-full flex flex-col gap-4'>
        <NavList items={items} pathname={pathname} />
      </nav>
    </aside>
  )
}
