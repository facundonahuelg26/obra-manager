import { Button } from '@heroui/button'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Skeleton } from '@heroui/skeleton'
import ProjectHeader from './project-header'
import LayoutContainer from '../common/layout-container'
import Grid from '../common/grid'

const LoadingProjects = () => {
  return (
    <LayoutContainer>
      <ProjectHeader />
      <Divider />
      <Grid container gap={4}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card key={index} className='w-full h-40 mt-8'>
              <CardHeader>
                <Skeleton>
                  <p className='text-left'>
                    Comenzá a organizar tu obra creando tu primer proyecto. Vas
                    a poder registrar gastos, etapas y hacerle seguimiento desde
                    un solo lugar.
                  </p>
                </Skeleton>
              </CardHeader>
              <Divider />
              <CardBody>
                <Skeleton>
                  {' '}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, qui! Veniam velit vitae architecto nobis voluptatum
                    enim, pariatur, totam quisquam quam, ea magnam asperiores
                    atque doloribus quod tempore eveniet iste!{' '}
                  </p>
                </Skeleton>
              </CardBody>
              <Divider />
              <CardFooter>
                <Skeleton>
                  {' '}
                  <Button variant='ghost' color='primary'>
                    Ver instrucciones
                  </Button>
                </Skeleton>
              </CardFooter>
            </Card>
          </Grid>
        ))}
      </Grid>
    </LayoutContainer>
  )
}

export default LoadingProjects
