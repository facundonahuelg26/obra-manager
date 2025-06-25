import Grid from '@/features/common/grid'
import LayoutContainer from '@/features/common/layout-container'
import { Card } from '@heroui/card'
import React from 'react'

const ProjectsCalculate = () => {
  return (
    <LayoutContainer>
      <div className='py-8'>
        <h1 className='text-2xl font-bold pb-8'>
          Elegir categoria de materiales
        </h1>
        <Grid container gap={4}>
          <Grid item xs={12} sm={2}>
            <Card className='p-4'>
              <p>Cimientos</p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Card className='p-4'>
              <p>Pisos</p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Card className='p-4'>
              <p>Muros</p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Card className='p-4'>
              <p>Revoques</p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Card className='p-4'>
              <p>Techo</p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Card className='p-4'>
              <p>Terminaciones</p>
            </Card>
          </Grid>
        </Grid>
      </div>
    </LayoutContainer>
  )
}

export default ProjectsCalculate
