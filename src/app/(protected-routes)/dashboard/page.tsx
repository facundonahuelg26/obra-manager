import ContainerAllProjects from '@/components/projects/container-all-projects'

// import { ROUTES } from '@/utils'
// import { Button } from '@heroui/button'
// import { Link } from '@heroui/link'
// import Link from 'next/link'
// import { getTranslations } from 'next-intl/server'

const Dashboard = async ({
  searchParams,
}: {
  searchParams?: Promise<{ vs_currency?: string }>
}) => {
  const params = await searchParams
  const vs_currency = await params?.vs_currency
  // const t = await getTranslations('Dashboard')

  return (
    <div className='flex flex-col items-center   p-5 sm:p-0 sm:pt-20'>
      <div className='max-w-2xl  text-center flex justify-center'>
        <ContainerAllProjects vs_currency={vs_currency} />
      </div>
    </div>
  )
}

export default Dashboard
