'use client'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'

interface IconProps {
  dataIcon: string
  className?: string
  apply?: boolean
}

const RenderIcon = ({ dataIcon, className, apply = false }: IconProps) => {
  const { theme } = useTheme()

  const iconClass =
    theme === 'dark' && apply === true
      ? 'filter brightness-0 invert'
      : 'filter brightness-100 invert-0'
  return (
    <Icon
      icon={dataIcon}
      className={`w-6 h-6 filter ${iconClass} ${className}`}
    />
  )
}

export default RenderIcon
