// components/ModalDelete.tsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal'
import { Button } from '@heroui/button'
import { useDisclosure } from '@heroui/react'
import RenderIcon from './render-icon'
import { ICONS } from '@/utils'

interface ModalDeleteProps {
  onConfirm: () => void
  label?: string
  title?: string
  confirmText?: string
  cancelText?: string
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  onConfirm,
  label = 'Eliminar',
  title = 'Eliminar material',
  confirmText = 'Eliminar',
  cancelText = 'Cancelar',
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleConfirm = () => {
    onConfirm()
    onOpenChange() // cerrar modal
  }

  return (
    <>
      <Button
        isIconOnly
        aria-label={label}
        color='default'
        variant='light'
        onPress={onOpen}
      >
        <RenderIcon dataIcon={ICONS.DELETE} />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable
        backdrop='blur'
      >
        <ModalContent>
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
              <p>
                ¿Estás seguro que querés eliminar este material? Esta acción no
                se puede deshacer.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onPress={onOpenChange}>
                {cancelText}
              </Button>
              <Button color='danger' onPress={handleConfirm}>
                {confirmText}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDelete
