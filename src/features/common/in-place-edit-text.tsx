import { Input } from '@heroui/input'
import { useEffect, useState } from 'react'
import RenderIcon from './render-icon'
import { ICONS } from '@/utils'
import { Typography } from './typography'
import { Button } from '@heroui/button'
import { ProjectData } from './project-interface'

export interface InPlaceEditTextProps {
  title?: string
  value: string | null
  inputName: keyof ProjectData
  handleChangeDataProject: (e: React.ChangeEvent<HTMLInputElement>) => void
  editedFields?: Record<keyof ProjectData, boolean>
}

const InPlaceEditText = ({
  title,
  value,
  inputName,
  handleChangeDataProject,
  editedFields,
}: InPlaceEditTextProps) => {
  const [open, setOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  // 🔁 Cierra solo si: está abierto, el campo ya no está editado, y no tiene foco
  useEffect(() => {
    if (!editedFields?.[inputName] && !isFocused) {
      setOpen(false)
    }
  }, [editedFields, inputName, isFocused])

  if (open) {
    return (
      <div className='w-full'>
        <Input
          variant='bordered'
          color='default'
          fullWidth
          name={inputName}
          value={value || ''}
          onChange={handleChangeDataProject}
          errorMessage='Este campo es requerido'
          type='text'
          autoFocus
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          endContent={
            editedFields?.[inputName] && (
              <RenderIcon dataIcon='fluent:save-edit-24-regular' />
            )
          }
        />
      </div>
    )
  }

  return (
    <div className='flex items-center justify-between'>
      <Typography>
        {title}: {value}
      </Typography>
      <Button
        isIconOnly
        color='default'
        variant='light'
        onPress={() => setOpen(true)}
      >
        <RenderIcon dataIcon={ICONS.EDIT} />
      </Button>
    </div>
  )
}

export default InPlaceEditText
