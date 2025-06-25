import Grid from '@/features/common/grid'
import { Card, CardBody, CardHeader } from '@heroui/card'

const History = () => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12}>
        <Card className='p-4'>
          <CardHeader>
            <h4 className='text-lg text-primary'>Historial</h4>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'>
            <p>Actividad 1</p>
            <p>Actividad 2</p>
            <p>Actividad 3</p>
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  )
}

export default History
