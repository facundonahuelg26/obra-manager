import { FormEvent, useState } from 'react'

export const useCreateProject = () => {
  const [action, setAction] = useState<string | null>(null)

  const handleReset = () => {
    setAction(null)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    setAction(`${JSON.stringify(data)}`)
  }

  return {
    action,
    handleReset,
    handleSubmit,
  }
}
