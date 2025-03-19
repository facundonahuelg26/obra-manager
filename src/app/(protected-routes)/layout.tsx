import { Footer, Navigation } from '@/components'

const PrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Navigation />
      <main className='min-h-[calc(100vh-65px-56px)]'>{children}</main>
      <Footer />
    </>
  )
}

export default PrivateLayout
