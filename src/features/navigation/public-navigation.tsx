'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar'
import { Link } from '@heroui/link'
import { useTranslations } from 'next-intl'

import RenderIcon from '../common/render-icon'
import { publicMenuData } from './menu-data'
import { useState } from 'react'

const PublicNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('Navigation')
  const menuItems = publicMenuData(t)

  return (
    <Navbar
      maxWidth='full'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
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
      <NavbarBrand className='flex justify-end sm:justify-start'>
        <p className='font-bold text-inherit'>{t('appName')}</p>
      </NavbarBrand>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            // isActive={pathname === item.link}
            // className={
            //   pathname === item.link
            //     ? 'py-2 pl-2 bg-primary/25 data-[hover=true]:bg-primary/50 data-[hover=true]:text-primary'
            //     : 'pl-2 text-default'
            // }
          >
            <Link
              // className={`w-full flex items-center gap-2 ${
              //   pathname === item.link && 'text-primary'
              // } tracking-wider text-sm`}
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
      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className={'pl-2 text-default'}>
            <Link
              className={`w-full flex items-center gap-2  tracking-wider text-sm`}
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
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}

export default PublicNavigation
