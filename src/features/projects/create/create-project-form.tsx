'use client'
import Grid from '@/features/common/grid'
import LayoutContainer from '@/features/common/layout-container'
import { Input } from '@heroui/input'
import { useCreateProject } from './use-create-project'
import { Button } from '@heroui/button'
import { Form } from '@heroui/form'

const CreateProjectForm = () => {
  const { action, handleReset, handleSubmit } = useCreateProject()

  return (
    <Form onReset={handleReset} onSubmit={handleSubmit}>
      <LayoutContainer>
        <div className='py-8'>
          <Grid container gap={4}>
            <Grid item xs={12} sm={6} className='bg-blue-700'>
              <Input
                isRequired
                errorMessage='Por favor ingresa tu nombre de usuario'
                label='Usuario'
                labelPlacement='outside'
                name='username'
                placeholder='Ingresa tu nombre de usuario'
                type='text'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                isRequired
                errorMessage='Por favor ingresa tu email'
                label='Correo electronico'
                labelPlacement='outside'
                name='email'
                placeholder='Ingresa tu correo electronico'
                type='email'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type='reset' variant='flat'>
                Reset
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className='w-full flex justify-end'>
                <Button color='primary' type='submit'>
                  Enviar
                </Button>
              </div>
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
