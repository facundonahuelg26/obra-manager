import { RenderIcon } from '@/features'
import { Button } from '@heroui/button'
import { signIn } from '@/auth'
import { getTranslations } from 'next-intl/server'
const Login = async () => {
  const t = await getTranslations('Login')
  return (
    <div className='w-full flex flex-col items-center sm:items-end py-8 sm:py-16'>
      <div className='w-full lg:max-w-sm'>
        <h1 className='text-2xl text-center font-bold mb-6'>{t('title')}</h1>
        <form
          action={async () => {
            'use server'
            await signIn('github')
          }}
        >
          <Button
            className='w-full h-12 mt-4 mb-4 text-base font-semibold'
            color='default'
            variant='solid'
            startContent={<RenderIcon dataIcon='uil:github' />}
            type='submit'
          >
            {t('github')}
          </Button>
        </form>
        <form
          action={async () => {
            'use server'
            await signIn('linkedin')
          }}
        >
          <Button
            className='w-full h-12 text-base font-semibold'
            color='secondary'
            variant='solid'
            startContent={<RenderIcon dataIcon='uil:linkedin' />}
            type='submit'
          >
            {t('linkedin')}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
