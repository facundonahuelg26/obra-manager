type LayoutContainerProps = {
  children: React.ReactNode
  className?: string
}

const LayoutContainer = ({ children, className }: LayoutContainerProps) => {
  return (
    <div
      className={`w-lvw lg:w-[780px] xl:w-[900px] 2xl:w-[1260px] px-7 sm:px-9 xl:px-0 mx-auto overflow-hidden ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  )
}
export default LayoutContainer
