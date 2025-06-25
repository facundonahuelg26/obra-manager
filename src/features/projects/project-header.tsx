import React from 'react'
// import CustomButton from '../common/custom-button'
import RenderIcon from '../common/render-icon'
import { ROUTES } from '@/utils'
import { Link } from '@heroui/link'
// import { Button } from '@heroui/button'
import { Typography } from '../common/typography'
import CustomButton from '../common/custom-button'
import { MainHeader } from '../common/main-header'

const ProjectHeader = () => {
  return (
    <MainHeader className='flex flex-col sm:flex-row items-center justify-between'>
      <Typography variant='h1'>Todos los proyectos</Typography>

      <CustomButton
        // className='flex font-medium'
        color='primary'
        startContent={<RenderIcon dataIcon='basil:plus-solid' />}
        as={Link}
        href={ROUTES.PROJECTS.CREATE_PROJECT}
      >
        Crear nuevo proyecto
      </CustomButton>
    </MainHeader>
  )
}

export default ProjectHeader
