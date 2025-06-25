import React from 'react'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean
  item?: boolean
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  gap?: number
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({
  container,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  gap,
  children,
  ...rest
}) => {
  if (container) {
    const gapClass = gap === 0 ? '' : `gap-${gap || 4}`
    return (
      <div className={`grid grid-cols-12 ${gapClass}`} {...rest}>
        {children}
      </div>
    )
  }

  if (item) {
    return (
      <div
        {...rest}
        className={`
          ${xs === 1 ? 'col-span-1' : ''}
          ${xs === 2 ? 'col-span-2' : ''}
          ${xs === 3 ? 'col-span-3' : ''}
          ${xs === 4 ? 'col-span-4' : ''}
          ${xs === 5 ? 'col-span-5' : ''}
          ${xs === 6 ? 'col-span-6' : ''}
          ${xs === 7 ? 'col-span-7' : ''}
          ${xs === 8 ? 'col-span-8' : ''}
          ${xs === 9 ? 'col-span-9' : ''}
          ${xs === 10 ? 'col-span-10' : ''}
          ${xs === 11 ? 'col-span-11' : ''}
          ${xs === 12 ? 'col-span-12' : ''}

          ${sm === 1 ? 'sm:col-span-1' : ''}
          ${sm === 2 ? 'sm:col-span-2' : ''}
          ${sm === 3 ? 'sm:col-span-3' : ''}
          ${sm === 4 ? 'sm:col-span-4' : ''}
          ${sm === 5 ? 'sm:col-span-5' : ''}
          ${sm === 6 ? 'sm:col-span-6' : ''}
          ${sm === 7 ? 'sm:col-span-7' : ''}
          ${sm === 8 ? 'sm:col-span-8' : ''}
          ${sm === 9 ? 'sm:col-span-9' : ''}
          ${sm === 10 ? 'sm:col-span-10' : ''}
          ${sm === 11 ? 'sm:col-span-11' : ''}
          ${sm === 12 ? 'sm:col-span-12' : ''}

          ${md === 1 ? 'md:col-span-1' : ''}
          ${md === 2 ? 'md:col-span-2' : ''}
          ${md === 3 ? 'md:col-span-3' : ''}
          ${md === 4 ? 'md:col-span-4' : ''}
          ${md === 5 ? 'md:col-span-5' : ''}
          ${md === 6 ? 'md:col-span-6' : ''}
          ${md === 7 ? 'md:col-span-7' : ''}
          ${md === 8 ? 'md:col-span-8' : ''}
          ${md === 9 ? 'md:col-span-9' : ''}
          ${md === 10 ? 'md:col-span-10' : ''}
          ${md === 11 ? 'md:col-span-11' : ''}
          ${md === 12 ? 'md:col-span-12' : ''}

          ${lg === 1 ? 'lg:col-span-1' : ''}
          ${lg === 2 ? 'lg:col-span-2' : ''}
          ${lg === 3 ? 'lg:col-span-3' : ''}
          ${lg === 4 ? 'lg:col-span-4' : ''}
          ${lg === 5 ? 'lg:col-span-5' : ''}
          ${lg === 6 ? 'lg:col-span-6' : ''}
          ${lg === 7 ? 'lg:col-span-7' : ''}
          ${lg === 8 ? 'lg:col-span-8' : ''}
          ${lg === 9 ? 'lg:col-span-9' : ''}
          ${lg === 10 ? 'lg:col-span-10' : ''}
          ${lg === 11 ? 'lg:col-span-11' : ''}
          ${lg === 12 ? 'lg:col-span-12' : ''}

          ${xl === 1 ? 'xl:col-span-1' : ''}
          ${xl === 2 ? 'xl:col-span-2' : ''}
          ${xl === 3 ? 'xl:col-span-3' : ''}
          ${xl === 4 ? 'xl:col-span-4' : ''}
          ${xl === 5 ? 'xl:col-span-5' : ''}
          ${xl === 6 ? 'xl:col-span-6' : ''}
          ${xl === 7 ? 'xl:col-span-7' : ''}
          ${xl === 8 ? 'xl:col-span-8' : ''}
          ${xl === 9 ? 'xl:col-span-9' : ''}
          ${xl === 10 ? 'xl:col-span-10' : ''}
          ${xl === 11 ? 'xl:col-span-11' : ''}
          ${xl === 12 ? 'xl:col-span-12' : ''}

          ${xxl === 1 ? '2xl:col-span-1' : ''}
          ${xxl === 2 ? '2xl:col-span-2' : ''}
          ${xxl === 3 ? '2xl:col-span-3' : ''}
          ${xxl === 4 ? '2xl:col-span-4' : ''}
          ${xxl === 5 ? '2xl:col-span-5' : ''}
          ${xxl === 6 ? '2xl:col-span-6' : ''}
          ${xxl === 7 ? '2xl:col-span-7' : ''}
          ${xxl === 8 ? '2xl:col-span-8' : ''}
          ${xxl === 9 ? '2xl:col-span-9' : ''}
          ${xxl === 10 ? '2xl:col-span-10' : ''}
          ${xxl === 11 ? '2xl:col-span-11' : ''}
          ${xxl === 12 ? '2xl:col-span-12' : ''}
        `}
      >
        {children}
      </div>
    )
  }

  return <div {...rest}>{children}</div>
}

export default Grid
