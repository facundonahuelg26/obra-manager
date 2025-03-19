import { ROUTES } from '@/utils'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
// import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

const Dashboard = async () => {
  const t = await getTranslations('Dashboard')
  return (
    <div className='flex flex-col items-center   p-5 sm:p-0 sm:pt-20'>
      <div className='w-full max-w-[320px] sm:max-w-lg text-center flex justify-center'>
        {/* Contenido centrado en mobile arriba, en desktop más equilibrado */}
        <div className='w-full max-w-md'>
          <h1 className='text-2xl font-bold mb-4'>{t('title')}</h1>
          <p className='text-base leading-relaxed'>{t('subtitle')}</p>
          <p className='text-base leading-relaxed mt-4'>{t('moreInfo')}</p>
          <Button
            as={Link}
            href={ROUTES.CONFIGURE_PROFILE}
            className='w-full max-w-[320px] h-12 mt-6 text-base font-semibold'
            color='primary'
            variant='solid'
          >
            {t('linkConfigureProfile')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
