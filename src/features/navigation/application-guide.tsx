'use client'
import ModalInfo from '../common/modal-info'

const steps = [
  {
    title: 'Paso 1: Introducción',
    content:
      'En Obra Manager podrás crear y gestionar tus proyectos como arquitecto o profesional de la construcción de manera centralizada y eficiente.',
  },
  {
    title: 'Paso 2: Visualización de Proyectos',
    content:
      'Visualizá todos tus proyectos con sus respectivos datos, documentación adjunta, participantes y el estado en el que se encuentran en tiempo real.',
  },
  {
    title: 'Paso 3: Cálculo de Materiales',
    content:
      'Calculá los materiales necesarios para tus obras con nuestras herramientas integradas que te ayudarán a optimizar recursos y reducir errores.',
  },
  {
    title: 'Paso 4: Análisis Comparativo',
    content:
      'Realizá análisis y comparativas entre diferentes proyectos para evaluar costos, tiempos, eficiencia y rendimiento gracias a nuestras analíticas inteligentes.',
  },
]

const ApplicationGuide = () => {
  return (
    <ModalInfo
      type='steps'
      titleOpenButton='Guía de Aplicación'
      steps={steps}
      colorButton='primary'
    />
  )
}

export default ApplicationGuide

/*
  const contenidoUnico = {
    title: 'Título único',
    content: 'Este es el contenido del modal simple.',
  }

  <ModalInfo
      type='single'
      titleOpenButton='Abrir Modal Simple'
      content={contenidoUnico}
      colorButton='danger'
    />
*/
