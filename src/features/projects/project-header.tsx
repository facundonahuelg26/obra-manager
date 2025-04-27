import React from 'react'
import CustomButton from '../common/custom-button'
import RenderIcon from '../common/render-icon'

const ProjectHeader = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between'>
      <h1 className='text-2xl font-bold py-8'>Todos los proyectos</h1>
      <div className='pb-4 sm:pb-0 '>
        <CustomButton
          className='flex text-base font-semibold'
          color='solidBlue'
          startContent={<RenderIcon dataIcon='basil:plus-solid' />}
        >
          Crear nuevo proyecto
        </CustomButton>
      </div>
    </div>
  )
}

export default ProjectHeader
