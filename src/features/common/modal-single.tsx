// components/ModalInfo/ModalSingle.tsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal'
import { Button } from '@heroui/button'
import { useDisclosure } from '@heroui/react'

type Step = {
  title: string
  content: string
}

interface ModalSingleProps {
  titleOpenButton?: string
  content: Step
  colorButton?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
}

const ModalSingle: React.FC<ModalSingleProps> = ({
  titleOpenButton = 'Información',
  content,
  colorButton = 'primary',
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
        onOpenChange={onOpenChange}
        isDismissable
        backdrop='blur'
      >
        <ModalContent>
          <>
            <ModalHeader>{content.title}</ModalHeader>
            <ModalBody>
              <p>{content.content}</p>
            </ModalBody>
            <ModalFooter>
              <Button color={colorButton} onPress={onOpenChange}>
                Continuar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalSingle
