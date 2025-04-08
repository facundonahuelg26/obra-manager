'use client'
import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  // NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar'
import { Link } from '@heroui/link'
import { ROUTES } from '@/utils'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import CustomDropdown from './custom-dropdown'
import { useTranslations } from 'next-intl'
import CustomDrawer from './custom-drawer'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = useTranslations('Navigation')
  const menuItems = [
    { title: t('linkDashboard'), link: ROUTES.DASHBOARD },
    { title: t('linkConfigureProfile'), link: ROUTES.CONFIGURE_PROFILE },
  ]
  const pathname = usePathname()

  return (
    <>
      <Navbar
        maxWidth='full'
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          item: [
            'flex',
            'relative',
            'h-full',
            'items-center',
            "data-[active=true]:after:content-['']",
            'data-[active=true]:after:absolute',
            'data-[active=true]:after:bottom-0',
            'data-[active=true]:after:left-0',
            'data-[active=true]:after:right-0',
            'data-[active=true]:after:h-[2px]',
            'data-[active=true]:after:rounded-[2px]',
            'data-[active=true]:after:bg-secondary',
          ],
        }}
      >
        <NavbarContent className='sm:hidden' justify='start'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarContent>
        <NavbarBrand>
          <p className='font-bold text-inherit'>{t('appName')}</p>
        </NavbarBrand>

        {/* <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem isActive={pathname === ROUTES.DASHBOARD}>
            <Link color='foreground' href={ROUTES.DASHBOARD}>
              {t('linkDashboard')}
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === ROUTES.CONFIGURE_PROFILE}>
            <Link
              aria-current='page'
              color='foreground'
              href={ROUTES.CONFIGURE_PROFILE}
            >
              {t('linkConfigureProfile')}
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={pathname === item.link}
            >
              <Link
                className={`w-full ${pathname === item.link && 'text-primary'}`}
                color='foreground'
                href={item.link}
                size='lg'
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent as='div' justify='end'>
          <CustomDropdown t={t} />
        </NavbarContent>
      </Navbar>
      <CustomDrawer />
    </>
  )
}

export default Navigation
