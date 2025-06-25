'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
} from '@heroui/dropdown'
import RenderIcon from '../common/render-icon'
import { signOut } from 'next-auth/react'
import UserData from './user-data'
import AvatarData from './avatar-data'
import { TranslationFn } from '../common/types'
import { ICONS } from '@/utils'

const CustomDropdown = ({ t }: { t: TranslationFn }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [openDarkTheme, setOpenDarkTheme] = useState(false)
  const [openLanguage, setOpenLanguage] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDarkTheme(false)
      setOpenLanguage(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeLanguage = (newLocale: string) => {
    Cookies.set('NEXT_LOCALE', newLocale, { expires: 365 }) // Guardar idioma en cookie
    router.refresh() // Refrescar para aplicar cambios
  }

  if (!mounted) return null

  return (
    <Dropdown placement='bottom-end'>
      <AvatarData />
      {openDarkTheme ? (
        <DropdownMenu aria-label='Theme Actions' variant='flat'>
          <DropdownItem
            key='theme'
            className='cursor-default w-full !px-0'
            closeOnSelect={false}
            textValue={t('selectTheme')}
            startContent={<RenderIcon dataIcon={ICONS.ARROW_LEFT} />}
            onPress={() => setOpenDarkTheme(false)}
          >
            {t('selectTheme')}
          </DropdownItem>
          <DropdownItem
            key='theme dark'
            className='cursor-default w-full !px-0'
            closeOnSelect={false}
            textValue={t('dark')}
            startContent={
              <RenderIcon
                dataIcon={ICONS.CHECK}
                className={`${theme === 'dark' ? '' : 'opacity-0'}`}
              />
            }
            onPress={() => {
              setTheme('dark')
              setOpenDarkTheme(false)
            }}
          >
            {t('dark')}
          </DropdownItem>
          <DropdownItem
            key='theme light'
            className='cursor-default w-full !px-0'
            closeOnSelect={false}
            textValue={t('light')}
            startContent={
              <RenderIcon
                dataIcon={ICONS.CHECK}
                className={`${theme === 'light' ? '' : 'opacity-0'}`}
              />
            }
            onPress={() => {
              setTheme('light')
              setOpenDarkTheme(false)
            }}
          >
            {t('light')}
          </DropdownItem>
        </DropdownMenu>
      ) : openLanguage ? (
        <DropdownMenu aria-label='Language Actions' variant='flat'>
          <DropdownItem
            key='language'
            className='cursor-default w-full !px-0'
            closeOnSelect={false}
            textValue={t('selectLanguage')}
            startContent={<RenderIcon dataIcon={ICONS.ARROW_LEFT} />}
            onPress={() => setOpenLanguage(false)}
          >
            {t('selectLanguage')}
          </DropdownItem>
          <DropdownItem
            key='language-en'
            textValue={t('en')}
            startContent={
              <RenderIcon
                dataIcon={ICONS.CHECK}
                className={`${
                  Cookies.get('NEXT_LOCALE') === 'en' ? '' : 'opacity-0'
                }`}
              />
            }
            onPress={() => changeLanguage('en')}
          >
            {t('en')}
          </DropdownItem>
          <DropdownItem
            key='language-es'
            textValue={t('es')}
            startContent={
              <RenderIcon
                dataIcon={ICONS.CHECK}
                className={`${
                  Cookies.get('NEXT_LOCALE') === 'es' ? '' : 'opacity-0'
                }`}
              />
            }
            onPress={() => changeLanguage('es')}
          >
            {t('es')}
          </DropdownItem>
        </DropdownMenu>
      ) : (
        <DropdownMenu
          aria-label='Profile Actions'
          variant='flat'
          closeOnSelect={false}
        >
          <DropdownSection showDivider title={t('userDescription')}>
            <DropdownItem key='profile' textValue={t('userDescription')}>
              <UserData />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection showDivider title={t('customizeDescription')}>
            <DropdownItem
              key='theme'
              closeOnSelect={false}
              textValue={t('customizeDescription')}
              startContent={<RenderIcon dataIcon={ICONS.DROPDOWN.DARK} />}
              onPress={() => setOpenDarkTheme(true)}
            >
              {t('appearance')}
            </DropdownItem>
            <DropdownItem
              key='language'
              closeOnSelect={false}
              textValue={t('language')}
              startContent={<RenderIcon dataIcon={ICONS.DROPDOWN.LANGUAGE} />}
              onPress={() => setOpenLanguage(true)}
            >
              {t('language')}
            </DropdownItem>
          </DropdownSection>
          <DropdownItem
            key='logout'
            color='danger'
            textValue={t('logout')}
            startContent={<RenderIcon dataIcon={ICONS.DROPDOWN.LOGOUT} />}
            onPress={() => signOut()}
          >
            {t('logout')}
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  )
}

export default CustomDropdown
