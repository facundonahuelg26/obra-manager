// components/ModalInfo/ModalSteps.tsx
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

type Step = {
  title: string
  content: string
}

interface ModalStepsProps {
  titleOpenButton?: string
  steps: Step[]
  colorButton?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
}

const ModalSteps: React.FC<ModalStepsProps> = ({
  titleOpenButton = 'Información',
  steps,
  colorButton = 'primary',
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [stepIndex, setStepIndex] = useState(0)

  const handleNext = () => {
    if (stepIndex < steps.length - 1) setStepIndex((prev) => prev + 1)
  }

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex((prev) => prev - 1)
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
        {titleOpenButton}
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
              <ModalFooter>
                <Button
                  variant='ghost'
                  color='default'
                  onPress={handleBack}
                  isDisabled={stepIndex === 0}
                >
                  Anterior
                </Button>
                <Button
                  color={colorButton}
                  onPress={
                    stepIndex === steps.length - 1 ? onClose : handleNext
                  }
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

export default ModalSteps
