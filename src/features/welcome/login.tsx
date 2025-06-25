import { CustomButton, RenderIcon } from '@/features'
import { signIn } from '@/auth'
import { getTranslations } from 'next-intl/server'
import { Typography } from '../common/typography'
import { MainHeader } from '../common/main-header'
import { ICONS } from '@/utils'
const Login = async () => {
  const t = await getTranslations('Login')
  return (
    <div className='w-full flex flex-col items-center sm:items-end '>
      <div className='w-full lg:max-w-sm'>
        <MainHeader>
          <Typography variant='h1' as='h2' className='text-center sm:text-left'>
            {t('title')}
          </Typography>
        </MainHeader>
        <form
          action={async () => {
            'use server'
            await signIn('github')
          }}
        >
          <CustomButton
            className='my-2'
            size='lg'
            fullWidth
            // className='w-full h-12 mt-4 mb-4 text-base font-semibold'
            color='default'
            variant='solid'
            startContent={<RenderIcon dataIcon={ICONS.LOGIN.GITHUB} />}
            type='submit'
          >
            {t('github')}
          </CustomButton>
        </form>
        <form
          action={async () => {
            'use server'
            await signIn('linkedin')
          }}
        >
          <CustomButton
            className='my-2'
            size='lg'
            fullWidth
            // className='w-full h-12 text-base font-semibold'
            color='secondary'
            variant='solid'
            startContent={<RenderIcon dataIcon={ICONS.LOGIN.LINKEDIN} />}
            type='submit'
          >
            {t('linkedin')}
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default Login
