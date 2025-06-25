import type { ReactNode } from 'react'

interface MainHeaderProps {
  children: ReactNode
  className?: string
}

export const MainHeader = ({ children, className = '' }: MainHeaderProps) => {
  return <div className={`py-4 ${className}`}>{children}</div>
}
