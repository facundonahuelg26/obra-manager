import { Footer, PublicNavigation } from '@/features'

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <PublicNavigation />
      <main className='sm:min-h-[calc(100vh-65px-56px)]'>{children}</main>
      <Footer />
    </>
  )
}

export default PublicLayout
