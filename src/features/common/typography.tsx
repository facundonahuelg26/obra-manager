import React, { ElementType, ReactNode } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

type TypographyProps<T extends ElementType> = {
  variant?: Variant
  as?: T
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<T>

const defaultClasses: Record<Variant, string> = {
  h1: 'text-[24px] leading-[38px] font-medium',
  h2: 'text-[18px] leading-[28px] font-medium',
  h3: 'text-[18px] leading-[28px] font-medium',
  h4: 'text-[18px] leading-[28px] font-medium',
  h5: 'text-[18px] leading-[28px] font-medium',
  h6: 'text-[18px] leading-[28px] font-medium',
  p: '',
}

export const Typography = <T extends ElementType = 'p'>({
  variant = 'p',
  as,
  className = '',
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as || variant

  return (
    <Component className={`${defaultClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  )
}
