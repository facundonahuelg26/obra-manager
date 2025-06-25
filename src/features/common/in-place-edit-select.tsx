import { Form } from '@heroui/react'
import { Button } from '@heroui/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from '@heroui/dropdown'
import { Chip } from '@heroui/chip'
import { FormEvent, useRef, useState } from 'react'

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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
type ChipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

const DropdownSelectForm = ({
  inputName,
  option,
  options,
  title,
  handleSubmit,
}: InPlaceEditSelectProps) => {
  const [selected, setSelected] = useState<Option | null>(
    options.find((opt) => opt.key === option.key) || null,
  )

  const formRef = useRef<HTMLFormElement>(null)

  const handleSelect = (key: string) => {
    const selectedOption = options.find((opt) => opt.key === key)
    if (!selectedOption) return

    setSelected(selectedOption)

    // Actualiza el input hidden y dispara el submit
    const input = formRef.current?.elements.namedItem(
      inputName,
    ) as HTMLInputElement
    if (input) input.value = selectedOption.key

    formRef.current?.requestSubmit()
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div className='flex items-center gap-2'>
        <input type='hidden' name={inputName} value={selected?.key ?? ''} />
        {title}
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant='light'
              className='p-0 data-[hover=true]:bg-transparent'
            >
              <Chip
                color={selected?.color as ChipColor}
                variant='flat'
                size='sm'
              >
                <span className='uppercase font-semibold'>
                  {selected?.label || 'Seleccionar'}
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
    </Form>
  )
}

export default DropdownSelectForm
