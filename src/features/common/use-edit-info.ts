import { addToast } from '@heroui/toast'
import { FormEvent, useMemo, useState } from 'react'
import { CustomChangeEvent, ProjectData } from './project-interface'
import { validateField, ValidationErrors } from './validate-fields'

const getEditedFields = (
  original: ProjectData,
  current: ProjectData,
): Record<keyof ProjectData, boolean> => {
  const result = {} as Record<keyof ProjectData, boolean>
  ;(Object.keys(original) as (keyof ProjectData)[]).forEach((key) => {
    result[key] = original[key] !== current[key]
  })
  return result
}

export const useEditInfo = ({ projectData }: { projectData: ProjectData }) => {
  const [formDataProject, setFormDataProject] = useState(projectData)

  // ✅ Esto será el "original" para comparar, y podés actualizarlo en el submit
  const [originalData, setOriginalData] = useState(projectData)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const handleChangeDataProject = (
    e: React.ChangeEvent<HTMLInputElement> | CustomChangeEvent,
  ) => {
    const { name, value } = e.target
    const trimmedValue = typeof value === 'string' ? value.trimStart() : ''
    const error = validateField(
      name as keyof ProjectData,
      trimmedValue,
      formDataProject,
    )

    setFormDataProject((prev) => ({
      ...prev,
      [name]: trimmedValue,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: error || '',
    }))
  }

  const editedFields = useMemo(() => {
    return getEditedFields(originalData, formDataProject)
  }, [originalData, formDataProject])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // Simulamos un error
      // throw new Error('Algo salió mal al guardar el campo.')

      // 🔁 Si todo fuera bien, se actualizaría el estado original
      setOriginalData(formDataProject)
      console.log(formDataProject)
      addToast({
        title: 'Perfecto',
        description: 'Campo editado exitosamente',
        color: 'success',
      })
    } catch (error) {
      addToast({
        title: 'Ha ocurrido un error',
        description: (error as Error).message,
        color: 'danger',
      })
    }
  }

  return {
    formDataProject,
    handleChangeDataProject,
    editedFields,
    handleSubmit,
    errors,
  }
}
