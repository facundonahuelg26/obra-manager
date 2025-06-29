import { Card, CardBody, CardHeader } from '@heroui/card'
import React from 'react'
import { Typography } from './typography'
import LayoutContainer from './layout-container'
import { Link } from '@heroui/link'
import CustomButton from './custom-button'

type CardInfoProps = {
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  buttonText?: string
  link?: string
}

const CardInfo: React.FC<CardInfoProps> = ({
  title = 'Próximamente',
  subtitle = 'Estamos construyendo esta sección. Estará disponible en breve.',
  icon,
  buttonText,
  link,
}) => {
  return (
    <LayoutContainer>
      <div className='flex justify-center items-center'>
        <Card className='w-full max-w-xl mt-16 p-8'>
          <CardHeader className='flex flex-col items-center gap-4'>
            <Typography variant='h1' className='text-center'>
              {title}
            </Typography>
            {icon && (
              <div className='text-4xl text-warning min-w-24 min-h-24'>
                {icon}
              </div>
            )}
          </CardHeader>
          <CardBody className='flex flex-col items-center gap-4 text-center'>
            <Typography className='text-base text-muted-foreground'>
              {subtitle}
            </Typography>
            {buttonText && (
              <CustomButton
                as={Link}
                color='primary'
                href={link}
                variant='solid'
              >
                {buttonText}
              </CustomButton>
            )}
          </CardBody>
        </Card>
      </div>
    </LayoutContainer>
  )
}

export default CardInfo
