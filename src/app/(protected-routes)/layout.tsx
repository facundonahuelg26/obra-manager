import { Footer, Navigation } from '@/features'

const PrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Navigation />
      <main className='min-h-[calc(100vh-65px-80px)] sm:min-h-[calc(100vh-65px-56px)] flex-1 lg:ml-64'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PrivateLayout
