import Grid from '@/features/common/grid'
import { Card, CardBody, CardHeader } from '@heroui/card'

const TestDetailsThree = () => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12} sm={6}>
        <Card className='p-4' isBlurred>
          <CardHeader>
            <h2 className='text-lg text-primary'>Datos generales</h2>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'>
            <p>Nombre del proyecto: Casa de campo</p>
            <p>Fecha de inicio: 01/01/2025</p>
            <p>Fecha de finalizacion: 31/12/2025</p>
            <p>Ubicacion del proyecto: Ciudad de mexico</p>
            <p>Observaciones: Tener en cuenta las condiciones climaticas</p>
          </CardBody>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card className='p-4' isBlurred>
          <CardHeader>
            <h2 className='text-lg text-primary'>Datos del cliente</h2>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'>
            <p>Cliente: Juan Perez</p>
            <p>Correo: 3l8mP@example.com</p>
            <h2 className='text-lg text-primary'>Otros datos</h2>
            <p>Arquitecto: Alaniz Lopez</p>
            <p>Constructor: Constructora XYZ</p>
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TestDetailsThree
