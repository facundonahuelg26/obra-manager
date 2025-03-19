import { ROUTES } from '@/utils'
import { Button } from '@heroui/button'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
const WelcomePage = async () => {
  const t = await getTranslations('WelcomePage')
  return (
    <div className='flex flex-col items-center sm:justify-center min-h-screen p-5 sm:p-0'>
      <div className='w-full max-w-[320px] sm:max-w-lg text-center sm:mt-0 mt-20'>
        {/* Contenido centrado en mobile arriba, en desktop más equilibrado */}
        <div className='w-full max-w-md text-center sm:mt-0 mt-20'>
          <h1 className='text-2xl font-bold mb-4'>
            {/* Bienvenido a Radar de Salarios */} {t('title')}
          </h1>
          <p className='text-lg mb-6'>
            {t('text')}{' '}
            <Link
              href={ROUTES.LOGIN}
              className='text-fuchsia-500 hover:underline'
            >
              {t('linkToLogin')}
            </Link>
            .
          </p>
          <p className='text-base leading-relaxed'>{t('firstContent')}</p>
          <p className='text-base leading-relaxed mt-4'>{t('secondContent')}</p>
          <Button
            as={Link}
            href={ROUTES.LOGIN}
            className='w-full max-w-[320px] h-12 mt-6 text-base font-semibold'
            color='primary'
            variant='solid'
          >
            {t('buttonLogin')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
