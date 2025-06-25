// components/ModalInfo/ModalInfo.tsx
import ModalSingle from './modal-single'
import ModalSteps from './modal-steps'

type Step = {
  title: string
  content: string
}

type BaseProps = {
  titleOpenButton?: string
  colorButton?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
}

type SingleProps = BaseProps & {
  type: 'single'
  content: Step
}

type StepsProps = BaseProps & {
  type: 'steps'
  steps: Step[]
}

type ModalInfoProps = SingleProps | StepsProps

const ModalInfo: React.FC<ModalInfoProps> = (props) => {
  if (props.type === 'single') {
    return <ModalSingle {...props} />
  } else {
    return <ModalSteps {...props} />
  }
}

export default ModalInfo
