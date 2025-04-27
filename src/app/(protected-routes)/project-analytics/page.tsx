import { Grid } from '@/features'
import React from 'react'

const ProjectAnalytics = () => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12} md={2}>
        <div className='bg-red-300 h-20'>Columna 1</div>
      </Grid>
      <Grid item xs={12} md={2}>
        <div className='bg-green-300 h-20'>Columna 2</div>
      </Grid>
      <Grid item xs={12} md={2}>
        <div className='bg-blue-300 h-20'>Columna 3</div>
      </Grid>
      <Grid item xs={12} md={2}>
        <div className='bg-yellow-300 h-20'>Columna 3</div>
      </Grid>
      <Grid item xs={12} md={2}>
        <div className='bg-sky-500 h-20'>Columna 3</div>
      </Grid>
      <Grid item xs={12} md={2}>
        <div className='bg-indigo-500 h-20'>Columna 3</div>
      </Grid>
    </Grid>
  )
}

export default ProjectAnalytics
