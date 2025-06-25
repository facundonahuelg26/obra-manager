import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Chip, type ChipProps } from '@heroui/chip'
import { Divider } from '@heroui/divider'
import { Image } from '@heroui/image'
import { Link } from '@heroui/link'

// import RenderIcon from '../common/render-icon'
// import CustomButton from '../common/custom-button'
import { Button } from '@heroui/button'
import ProjectHeader from './project-header'
import Grid from '../common/grid'
import LayoutContainer from '../common/layout-container'
// const statusColorMap: Record<string, ChipProps['color']> = {
//   Finalizado: 'success',
//   Cancelado: 'danger',
//   sol: 'warning',
//   'En construcción': 'primary',
//   'En planificación': 'secondary',
// }
type ChipColor =
  | 'primary'
  | 'success'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'foreground'
export interface Project {
  id: number
  name: string
  status: string
  color: ChipColor
  startDate: string
  budget: number
}

const projects: Project[] = [
  {
    id: 1,
    // name: 'Edificio Central Park aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    name: 'Edificio Central Park',
    status: 'EN CONSTRUCCIÓN',
    color: 'primary',
    // color: `relative before:absolute before:left-0 before:top-0 before:h-full before:w-[20px] before:bg-primary/75 before:opacity-25 before:content-[''] pl-5`,
    startDate: '2024-02-15',
    budget: 1500000,
  },
  {
    id: 2,
    name: 'Casa Familiar López',
    status: 'FINALIZADO',
    color: 'success',
    // color: `relative before:absolute before:left-0 before:top-0 before:h-full before:w-[20px] before:bg-success/75 before:opacity-25 before:content-[''] pl-5`,
    startDate: '2023-05-10',
    budget: 350000,
  },
  {
    id: 3,
    name: 'Complejo Torres del Sol',
    status: 'EN PLANIFICACIÓN',
    color: 'secondary',
    // color: `relative before:absolute before:left-0 before:top-0 before:h-full before:w-[20px] before:bg-secondary/75 before:opacity-25 before:content-[''] pl-5`,
    startDate: '2024-08-01',
    budget: 5000000,
  },
  {
    id: 4,
    name: 'Oficinas GreenTech',
    status: 'CANCELADO',
    color: 'danger',
    // color: `relative before:absolute before:left-0 before:top-0 before:h-full before:w-[20px] before:bg-danger/75 before:opacity-25 before:content-[''] pl-5`,
    startDate: '2024-01-20',
    budget: 1200000,
  },
  {
    id: 5,
    name: 'Edificio Central Park',
    status: 'EN CONSTRUCCIÓN',
    color: 'primary',
    // color: `relative before:absolute before:left-0 before:top-0 before:h-full before:w-[20px] before:bg-primary/75 before:opacity-25 before:content-[''] pl-5`,
    startDate: '2024-02-15',
    budget: 1500000,
  },
  {
    id: 6,
    name: 'Casa Familiar López',
    status: 'FINALIZADO',
    color: 'success',
    // color: `relative before:absolute before:left-0 before:top-0 before:h-full before:w-[20px] before:bg-success/75 before:opacity-25 before:content-[''] pl-5`,
    startDate: '2023-05-10',
    budget: 350000,
  },
]
const customClass = projects.map((project) => {
  return `w-full relative before:absolute before:left-0 before:top-0 before:h-full before:w-[20px] before:bg-${project.color}/75 before:opacity-25 before:content-[''] pl-5`
})

const simularPeticionConRespuesta = (ms: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('¡Datos obtenidos!')
    }, ms)
  })
}
const ProjectCards = async () => {
  console.log('Llamando a la API...')
  const respuesta = await simularPeticionConRespuesta(3500)
  console.log(respuesta)
  const numberOfProjects = projects.length === 0
  return (
    <LayoutContainer>
      {/* // <div className='w-lvw lg:w-[700px] xl:w-[1260px]'> */}
      <ProjectHeader />
      {/* <Divider className='mt-4' /> */}
      {numberOfProjects ? (
        <Card
          // className={project.color}
          className='w-full'
        >
          <CardHeader>
            <p className='text-left'>
              Comenzá a organizar tu obra creando tu primer proyecto. Vas a
              poder registrar gastos, etapas y hacerle seguimiento desde un solo
              lugar.
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              qui! Veniam velit vitae architecto nobis voluptatum enim,
              pariatur, totam quisquam quam, ea magnam asperiores atque
              doloribus quod tempore eveniet iste!{' '}
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button variant='light' color='primary'>
              Ver instrucciones
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Grid container gap={4}>
          {projects.map((project: Project) => (
            <Grid item xs={12} sm={6} key={project.id}>
              <Card className={customClass[project.id - 1]}>
                <CardHeader className='flex gap-3'>
                  <Image
                    alt='heroui logo'
                    height={40}
                    radius='sm'
                    src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
                    width={40}
                  />
                  <div className='flex flex-col'>
                    <p>{project.name}</p>
                    <p>heroui.com</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <Chip
                    // className='uppercase font-extrabold'
                    color={project.color as ChipProps['color']}
                    size='sm'
                    // radius='md'
                    variant='flat'
                  >
                    {project.status}
                  </Chip>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button
                    as={Link}
                    color='default'
                    href='https://github.com/heroui-inc/heroui'
                    variant='ghost'
                  >
                    Más información
                  </Button>
                  {/* <Link href='https://github.com/heroui-inc/heroui'>
                    Ver proyecto
                  </Link> */}
                </CardFooter>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </LayoutContainer>
  )
}

export default ProjectCards
