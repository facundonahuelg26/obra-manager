import { useEffect, useState } from 'react'
import { Button } from '@heroui/button'
import { Chip } from '@heroui/chip'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from '@heroui/dropdown'
import RenderIcon from './render-icon'
import { ICONS } from '@/utils'
import { CustomChangeEvent } from './project-interface'

export interface Option {
  key: string
  label: string
  color: string
}

export interface InPlaceEditSelectProps {
  title?: string
  inputName: string
  option: Option
  options: Option[]
  editedFields?: Record<string, boolean>
  handleChangeDataProject: (
    e: React.ChangeEvent<HTMLInputElement> | CustomChangeEvent,
  ) => void
}

type ChipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

const InPlaceEditSelect = ({
  title,
  inputName,
  option,
  options,
  editedFields,
  handleChangeDataProject,
}: InPlaceEditSelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const selected = option
  // console.log(option, 'OPTION')
  useEffect(() => {
    if (!editedFields?.[inputName]) {
      setDropdownOpen(false)
    }
  }, [editedFields, inputName])

  const handleSelect = (key: string) => {
    const selectedOption = options.find((opt) => opt.key === key)
    if (!selectedOption) return

    const fakeEvent = {
      target: {
        name: inputName,
        value: selectedOption,
      },
    }

    handleChangeDataProject(fakeEvent)
    setDropdownOpen(false)
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        {title}:
        <Dropdown isOpen={dropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownTrigger>
            <Button className='bg-transparent'>
              <Chip
                color={selected?.color as ChipColor}
                variant='flat'
                size='sm'
              >
                <span className='uppercase font-semibold'>
                  {selected?.label}
                </span>
              </Chip>
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label='Estado'
            onAction={(key) => handleSelect(key as string)}
          >
            {options.map((opt, index) => (
              <DropdownSection
                showDivider={index !== options.length - 1}
                aria-label='seleccionar estado'
                key={opt.key}
              >
                <DropdownItem key={opt.key}>
                  <Chip color={opt.color as ChipColor} variant='flat' size='sm'>
                    <span className='uppercase font-semibold'>{opt.label}</span>
                  </Chip>
                </DropdownItem>
              </DropdownSection>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <Button
        isIconOnly
        color='default'
        variant='light'
        onPress={() => setDropdownOpen(true)} // 🔥 Abre el dropdown manualmente
      >
        <RenderIcon dataIcon={ICONS.EDIT} />
      </Button>
    </div>
  )
}

export default InPlaceEditSelect
