'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal'
import { Button } from '@heroui/button'
import { useDisclosure } from '@heroui/react'
import { useState } from 'react'

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [stepIndex, setStepIndex] = useState(0)

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1)
    }
  }

  const handleClose = () => {
    setStepIndex(0)
    onOpenChange()
  }

  const currentStep = steps[stepIndex]

  return (
    <>
      <Button
        className='w-full flex items-center gap-2 tracking-wider text-sm font-semibold'
        variant='light'
        size='lg'
        onPress={onOpen}
      >
        Guía de la Aplicación
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={handleClose}
        isDismissable
        backdrop='blur'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{currentStep.title}</ModalHeader>
              <ModalBody>
                <p>{currentStep.content}</p>
              </ModalBody>
              <ModalFooter className='flex justify-between'>
                <Button
                  variant='light'
                  onPress={handleBack}
                  isDisabled={stepIndex === 0}
                >
                  Anterior
                </Button>
                <Button
                  color='primary'
                  onPress={
                    stepIndex === steps.length - 1 ? onClose : handleNext
                  }
                  isDisabled={stepIndex === steps.length - 1 && false}
                >
                  {stepIndex === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ApplicationGuide
