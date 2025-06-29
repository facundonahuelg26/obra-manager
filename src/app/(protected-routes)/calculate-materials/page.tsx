import { RenderIcon } from '@/features'
import { CardInfo } from '@/features'
import { ICONS, ROUTES } from '@/utils'

const CalculateMaterials = () => {
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

export default CalculateMaterials
/**
 
  Ella dice que no cree, 
  en dinosaurios ni en pangea.
  le dije el planeta exploto,
  pero la luna sigue ahi.
  y un chocolate era mi cena.
  Ella cursa de mañana,
  y conmigo en la noche.
  Pero esta piba no tiene remedio,
  Si un homo sapiens es la evolucion, 
  un testigo va y se esconde.
  Y yo se que tal vez, tu nunca escuches mis razones, yo sè,
  y yo se que tal vez, te siga educando asi, 
  mostrandote mi inspiracion, 
  mientras siga viendo tu cara y la cara de Hasbulla,
  mientras siga paseandote a vos, y me tome un cafe con medialunas.
  mientras tenga que leerte cada cosa que decis.
 */
