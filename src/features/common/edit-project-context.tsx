'use client'

import { createContext, useContext, FormEvent } from 'react'
import { useEditInfo } from './use-edit-info'
import { CustomChangeEvent, ProjectData } from './project-interface'

interface ProjectContextType {
  formDataProject: ProjectData
  // setAction: React.Dispatch<React.SetStateAction<ProjectData>>
  errors?: Partial<Record<keyof ProjectData, string>>
  handleChangeDataProject: (
    e: React.ChangeEvent<HTMLInputElement> | CustomChangeEvent,
  ) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  editedFields: Record<keyof ProjectData, boolean>
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

export const useEditProjectContext = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProject debe usarse dentro de ProjectProvider')
  }
  return context
}

export const ProjectProvider = ({
  children,
  initialData,
}: {
  children: React.ReactNode
  initialData: ProjectData
}) => {
  const {
    formDataProject,
    errors,
    handleChangeDataProject,
    editedFields,
    handleSubmit,
  } = useEditInfo({
    projectData: initialData,
  })

  return (
    <ProjectContext.Provider
      value={{
        formDataProject,
        errors,
        handleChangeDataProject,
        editedFields,
        handleSubmit,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
