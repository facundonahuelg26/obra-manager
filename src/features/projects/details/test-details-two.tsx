import Grid from '@/features/common/grid'
import { Card, CardBody, CardHeader } from '@heroui/card'
import React from 'react'

const TestDetailsTwo = () => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12} sm={6}>
        <Card className='p-4'>
          <CardHeader>
            <h2 className='text-lg'>Datos generales</h2>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'>Izquierda 2</CardBody>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card className='p-4'>
          <CardHeader>
            <h2 className='text-lg'>Datos generales</h2>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'>Derecha 2</CardBody>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TestDetailsTwo
