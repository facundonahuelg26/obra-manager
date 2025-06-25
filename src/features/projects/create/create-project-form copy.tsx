'use client'
import Grid from '@/features/common/grid'
import LayoutContainer from '@/features/common/layout-container'
import { Input, Textarea } from '@heroui/input'
import { useCreateProject } from './use-create-project'
import { Button } from '@heroui/button'
import { Form } from '@heroui/form'
import { Card, CardBody, CardHeader } from '@heroui/card'
// import RenderIcon from '@/features/common/render-icon'

const CreateProjectForm = () => {
  const { action, handleReset, handleSubmit } = useCreateProject()

  return (
    <Form onReset={handleReset} onSubmit={handleSubmit}>
      <LayoutContainer>
        <div className='py-8'>
          <h1 className='text-2xl font-bold pb-8'>
            Completar los datos del proyecto
          </h1>
          <Grid container gap={4}>
            <Grid item xs={12} sm={6}>
              <div className='flex flex-col gap-4'>
                <Card className='p-4'>
                  <CardHeader>
                    <h2 className='text-lg'>Datos generales</h2>
                  </CardHeader>
                  <CardBody className='flex flex-col gap-4'>
                    {' '}
                    <Input
                      variant='bordered'
                      color='primary'
                      isRequired
                      errorMessage='Por favor ingresa el nombre del proyecto'
                      label='Nombre del proyecto'
                      name='projectName'
                      placeholder='Ej: Casa de campo'
                      type='text'
                    />
                    {/* <Input
                      variant='bordered'
                      color='primary'
                      isRequired
                      errorMessage='Por favor ingresa el estado del proyecto'
                      label='Estado del proyecto'
                      name='projectState'
                      placeholder='Ej: En ejecución / Finalizado / En pausa'
                      type='text'
                    /> */}
                    <Input
                      variant='bordered'
                      color='primary'
                      isRequired
                      errorMessage='Por favor ingresa fecha de inicio del proyecto'
                      label='Fecha de inicio del proyecto'
                      name='startDate'
                      placeholder='Ej: 01/03/2025'
                      type='text'
                    />
                    <Input
                      variant='bordered'
                      color='primary'
                      isRequired
                      errorMessage='Por favor ingresa fecha de finalización del proyecto'
                      label='Fecha de finalización del proyecto'
                      name='endDate'
                      placeholder='Ej: 30/11/2025'
                      type='text'
                    />
                    <Input
                      variant='bordered'
                      color='primary'
                      isRequired
                      errorMessage='Por favor ingresa la ubicación del proyecto'
                      label='Ubicación del proyecto'
                      name='location'
                      placeholder='Ej: Av. Corrientes 1234, CABA'
                      type='text'
                    />
                  </CardBody>
                </Card>
                <Card className='p-4'>
                  <CardHeader className='flex-col items-start'>
                    <h2 className='text-lg'>Datos del cliente</h2>
                  </CardHeader>
                  <CardBody className='flex flex-col gap-4'>
                    <Input
                      variant='bordered'
                      color='primary'
                      isRequired
                      errorMessage='Por favor ingresa el nombre del cliente'
                      label='Cliente'
                      name='customer'
                      placeholder='Ej: Constructora ABC S.A.'
                      type='text'
                    />
                    <Input
                      variant='bordered'
                      color='primary'
                      isRequired
                      errorMessage='Por favor ingresa el correo del cliente'
                      label='Correo del cliente'
                      name='customerEmail'
                      placeholder='Ej: juan.perez@example.com'
                      type='text'
                    />
                  </CardBody>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className='p-4'>
                <CardHeader className='flex-col items-start'>
                  <h2 className='text-lg'>Datos opcionales</h2>
                </CardHeader>
                <CardBody className='flex flex-col gap-4'>
                  <Input
                    variant='bordered'
                    color='primary'
                    isRequired
                    errorMessage='Por favor ingresa arquitecto'
                    label='Arquitecto'
                    name='manager'
                    placeholder='Ej: Estudio López Arquitectos'
                    type='text'
                  />
                  <Input
                    variant='bordered'
                    color='primary'
                    isRequired
                    errorMessage='Por favor ingresa constructor'
                    label='Constructor'
                    name='builder'
                    placeholder='Ej: Constructora ABC S.A.'
                    type='text'
                  />
                  <Textarea
                    minRows={4}
                    maxRows={4}
                    label='Observaciones'
                    placeholder='Ingresa aqui tus observaciones'
                  />
                  {/* Los botones estos en mobile van a ir abajo como una navegacion fixed */}
                  <div className='w-full pt-4 flex justify-between'>
                    <Button type='reset' variant='flat'>
                      Restablecer
                    </Button>
                    <Button color='primary' type='submit'>
                      Crear proyecto
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Grid>
            <Grid item xs={12}>
              {action && (
                <div className='flex justify-center text-small text-default-500'>
                  <span className='px-2'>Envio de formulario:</span>{' '}
                  <code>{action}</code>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </LayoutContainer>
    </Form>
  )
}

export default CreateProjectForm
