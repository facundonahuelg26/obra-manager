import Grid from '@/features/common/grid'
import { Card, CardBody, CardHeader } from '@heroui/card'
import React from 'react'

const AnalyticsByProject = () => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12} sm={6}>
        <Card className='p-4'>
          <CardHeader>
            <h2 className='text-lg'>Costo por categoría</h2>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'>
            Con reportes me refería a un tab donde el usuario vea datos
            procesados o resumidos, como:{' '}
            <p>* Total de materiales cargados y sus cantidades.</p>{' '}
            <p>* Gastos totales por categoría (cimientos, paredes, etc.).</p>{' '}
            <p>
              * Comparativas: proyectado vs. real. Gráficos simples (si aplica)
              para visualización.
            </p>{' '}
            <p>* Es para análisis, no para carga de datos.</p>
          </CardBody>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card className='p-4'>
          <CardHeader>
            <h2 className='text-lg'>Datos generales</h2>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'>Derecha</CardBody>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AnalyticsByProject
