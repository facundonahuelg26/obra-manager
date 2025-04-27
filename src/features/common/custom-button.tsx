'use client'
import { extendVariants, Button } from '@heroui/react'

const CustomButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      solidBlue:
        'bg-[#1868db] text-white hover:bg-[#0E3F84] data-[hover=true]:opacity-100 dark:bg-[#669df1] dark:text-[#111827] dark:hover:bg-[#8FB8F6]',
      borderedBlue:
        'bg-[#bbd4f9] text-[#1868db] border-[#1868db] hover:bg-[#a5c6f7] hover:text-[#1868db] data-[hover=true]:opacity-100 dark:bg-[#162b42] dark:text-primary border-1 dark:border-primary dark:hover:border-primary/80',
      violet: 'bg-[#8b5cf6] text-[#fff]',
    },
    isDisabled: {
      true: 'bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed',
    },
    size: {
      xs: 'px-2 min-w-12 h-6 text-tiny gap-1 rounded-small',
      md: 'px-4 min-w-20 h-10 text-small gap-2 rounded-small',
      xl: 'px-8 min-w-28 h-14 text-large gap-4 rounded-medium',
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: 'solidBlue',
    size: 'md',
    isDisabled: false,
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      color: 'solidBlue',
      // class: 'bg-[#84cc16]/80 opacity-100',
    },
  ],
})
export default CustomButton
