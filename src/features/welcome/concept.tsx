import React from 'react'
import { Typography } from '../common/typography'
import { MainHeader } from '../common/main-header'

const Concept = () => {
  return (
    <div className='w-full flex flex-col'>
      <MainHeader>
        <Typography variant='h1' className='text-center sm:text-left'>
          Optimiza la gestión de tus proyectos de construcción
        </Typography>
      </MainHeader>
      <Typography className='text-center sm:text-left'>
        Obra Manager es una plataforma integral diseñada para arquitectos,
        ingenieros y profesionales de la construcción que buscan mejorar el
        control y la eficiencia en la gestión de sus obras.
      </Typography>
    </div>
  )
}

export default Concept
