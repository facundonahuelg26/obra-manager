import React from 'react'
import { getTranslations } from 'next-intl/server'
const Footer = async () => {
  const t = await getTranslations('Footer')
  return (
    <div className='flex justify-center lg:ml-64'>
      <p className='flex-1 p-4 text-base text-center font-semibold'>
        {t('text')}
      </p>
    </div>
  )
}

export default Footer
