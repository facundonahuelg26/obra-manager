// import { ContainerAllProjects } from '@/features'

import { ProjectCards, LoadingProjects } from '@/features'
import { Suspense } from 'react'

// import { ROUTES } from '@/utils'
// import { Button } from '@heroui/button'
// import { Link } from '@heroui/link'
// import Link from 'next/link'
// import { getTranslations } from 'next-intl/server'

const Projects = async ({
  searchParams,
}: {
  searchParams?: Promise<{ vs_currency?: string }>
}) => {
  const params = await searchParams
  const vs_currency = await params?.vs_currency
  console.log(vs_currency)
  // const t = await getTranslations('Dashboard')

  return (
    <div className='flex flex-col items-center   p-5 sm:p-0 sm:pt-4'>
      <div className='text-center flex justify-center'>
        <Suspense fallback={<LoadingProjects />}>
          <ProjectCards />
        </Suspense>
        {/* <ContainerAllProjects vs_currency={vs_currency} /> */}
      </div>
    </div>
  )
}

export default Projects
