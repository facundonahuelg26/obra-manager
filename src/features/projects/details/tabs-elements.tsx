// import TestDetailsTwo from './test-details-two'
import { ProjectDataCard } from './general-info'
// import Comments from './comments'
// import History from './history'
// import AnalyticsByProject from './analytics-by-project'

export const tabsInfo = [
  {
    id: 'data',
    label: 'Datos Generales',
    // content: <GeneralInfo />,
  },
  {
    id: 'materials',
    label: 'Editar Materiales',
    // content: <TestDetailsTwo />,
  },
  {
    id: 'statistics',
    label: 'Estadísticas',
    // content: <AnalyticsByProject />,
  },
]

export const tabsUsers = [
  {
    id: 'comments',
    label: 'Comentarios',
    // content: <Comments />,
  },
  {
    id: 'history',
    label: 'Historial',
    // content: <History />,
  },
]
export const projectData = [
  {
    id: 'project',
    label: 'Proyecto',
    content: <ProjectDataCard />,
  },
  {
    id: 'customer',
    label: 'Cliente',
    content: <ProjectDataCard client />,
  },
  {
    id: 'other',
    label: 'Otros datos',
    content: <ProjectDataCard others />,
  },
]
