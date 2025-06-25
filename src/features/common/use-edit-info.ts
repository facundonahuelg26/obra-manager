import { addToast } from '@heroui/toast'
import { FormEvent, useMemo, useState } from 'react'
import { ProjectData } from './project-interface'

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

  const handleChangeDataProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDataProject({
      ...formDataProject,
      [e.target.name]: e.target.value,
    })
  }

  const editedFields = useMemo(() => {
    return getEditedFields(originalData, formDataProject)
  }, [originalData, formDataProject])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 🔁 Actualizamos el original con lo nuevo
    setOriginalData(formDataProject)

    addToast({
      title: 'Perfecto',
      description: 'Campo editado exitosamente',
      color: 'success',
    })
  }

  return {
    formDataProject,
    handleChangeDataProject,
    editedFields,
    handleSubmit,
  }
}
