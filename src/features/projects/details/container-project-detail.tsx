import LayoutContainer from '@/features/common/layout-container'
import { Typography } from '@/features/common/typography'
import { MainHeader } from '@/features/common/main-header'
import AllDetails from './all-details'
import HistoryAndComments from './history-and-comments'
import { ProjectProvider } from '@/features/common/edit-project-context'
// import SaveChanges from './save-changes'
// import { Card, CardBody } from '@heroui/card'

const ContainerProjectDetail = () => {
  const projectData = {
    name: 'Casa CKAZ',
    location: 'Ciudad de mexico',
    status: { key: 'pending', label: 'Pendiente', color: 'warning' },
    startDate: '01/01/2025',
    endDate: '31/12/2025',
  }
  return (
    <LayoutContainer>
      <div>
        <ProjectProvider initialData={projectData}>
          {/* <MainHeader>
            <Typography variant='h1'>Detalles del proyecto</Typography>
          </MainHeader> */}
          {/* <Form>
  <Button type='submit'>
    Guardar cambios
  </Button>
</Form> */}
          {/* <Tabs aria-label='Dynamic tabs info' items={tabsInfo}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              {item.content}
            </Tab>
          )}
        </Tabs> */}
          {/* <SaveChanges />
          <Card className='bg-default/5'>
            <CardBody>
              <AllDetails />
            </CardBody>
          </Card> */}
          <AllDetails />
          <MainHeader>
            <Typography variant='h2'>Actividad</Typography>
          </MainHeader>
          <HistoryAndComments />
        </ProjectProvider>
      </div>
    </LayoutContainer>
  )
}

export default ContainerProjectDetail
