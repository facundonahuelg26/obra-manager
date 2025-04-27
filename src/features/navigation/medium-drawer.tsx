'use client'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from '@heroui/react'
import { TranslationFn } from '../common/types'
import NavList from './nav-list'
import { menuData } from './menu-data'
import { usePathname } from 'next/navigation'
import RenderIcon from '../common/render-icon'

export default function MediumDrawer({ t }: { t: TranslationFn }) {
  const items = menuData(t)
  const pathname = usePathname()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <aside>
      <div className='h-16 flex items-center'>
        <Button isIconOnly aria-label='Menu' variant='light' onPress={onOpen}>
          <RenderIcon dataIcon={isOpen ? '' : 'ic:baseline-menu'} />
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='left'
        backdrop='blur'
        closeButton={
          <span className='flex items-center justify-center'>
            <RenderIcon dataIcon='ic:baseline-close' className='mt-2' />
          </span>
        }
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className='flex flex-col gap-1'>
                {t('appName')}
              </DrawerHeader>
              <DrawerBody>
                <NavList items={items} pathname={pathname} />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </aside>
  )
}
