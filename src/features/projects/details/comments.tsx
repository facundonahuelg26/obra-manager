import Grid from '@/features/common/grid'
import { Textarea } from '@heroui/input'

const Comments = () => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12}>
        {/* <Card className='p-4'>
          <CardHeader>
            <h4 className='text-lg text-primary'>Comentarios</h4>
          </CardHeader>

          <CardBody className='flex flex-col gap-4'> */}
        <Textarea
          variant='faded'
          minRows={4}
          maxRows={4}
          // label='Comentarios'
          placeholder='Ingresar un comentario sobre el proyecto...'
        />
        {/* </CardBody>
        </Card> */}
      </Grid>
    </Grid>
  )
}

export default Comments
