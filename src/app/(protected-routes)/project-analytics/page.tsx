import { RenderIcon } from '@/features'
import { CardInfo } from '@/features'
import { ICONS, ROUTES } from '@/utils'

const ProjectAnalytics = () => {
  return (
    <CardInfo
      icon={
        <RenderIcon dataIcon={ICONS.HAPPY} className='w-24 h-24 text-4xl' />
      }
      title='En construcción'
      subtitle='Estamos construyendo esta sección. Estará disponible en breve. Este flujo forma parte de la siguiente etapa del desarrollo. Gracias por usar Obra Manager.'
      buttonText='Volver a proyectos'
      link={ROUTES.PROJECTS.MAIN}
    />
  )
}

export default ProjectAnalytics
