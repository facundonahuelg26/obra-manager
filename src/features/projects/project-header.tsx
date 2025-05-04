import React from 'react'
import CustomButton from '../common/custom-button'
import RenderIcon from '../common/render-icon'
import { ROUTES } from '@/utils'
import { Link } from '@heroui/link'

const ProjectHeader = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between'>
      <h1 className='text-2xl font-bold py-8'>Todos los proyectos</h1>
      <div className='pb-4 sm:pb-0 '>
        <CustomButton
          className='flex text-base font-semibold'
          color='solidBlue'
          startContent={<RenderIcon dataIcon='basil:plus-solid' />}
          as={Link}
          href={ROUTES.PROJECTS.CREATE_PROJECT}
        >
          Crear nuevo proyecto
        </CustomButton>
      </div>
    </div>
  )
}

export default ProjectHeader
