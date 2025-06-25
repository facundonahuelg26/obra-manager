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
// import { ROUTES } from '@/utils'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import CustomDropdown from './custom-dropdown'
import { useTranslations } from 'next-intl'
import CustomDrawer from './custom-drawer'
import { menuData } from './menu-data'
import RenderIcon from '../common/render-icon'
import MediumDrawer from './medium-drawer'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = useTranslations('Navigation')

  const menuItems = menuData(t)
  const pathname = usePathname()

  return (
    <>
      <Navbar
        maxWidth='full'
        // isBordered
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
            icon={
              <RenderIcon
                dataIcon={isMenuOpen ? 'ic:baseline-close' : 'ic:baseline-menu'}
              />
            }
          />
        </NavbarContent>
        <NavbarContent className='hidden sm:block lg:hidden' justify='start'>
          <MediumDrawer t={t} />
        </NavbarContent>
        <NavbarBrand>
          <p className='font-bold text-inherit'>{t('appName')}</p>
        </NavbarBrand>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={pathname === item.link}
              className={
                pathname === item.link
                  ? 'py-2 pl-2 bg-primary/25 data-[hover=true]:bg-primary/50 data-[hover=true]:text-primary'
                  : 'pl-2 text-default'
              }
            >
              <Link
                className={`w-full flex items-center gap-2 ${
                  pathname === item.link && 'text-primary'
                } tracking-wider text-sm`}
                color='foreground'
                href={item.link}
                size='lg'
                showAnchorIcon
                anchorIcon={
                  <div className='order-first flex-shrink-0'>
                    <RenderIcon dataIcon={item.icon} />
                  </div>
                }
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
