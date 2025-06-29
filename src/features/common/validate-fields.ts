// import { parseDate } from '@internationalized/date'
import { ProjectData } from './project-interface'

export type ValidationErrors = Partial<Record<keyof ProjectData, string>>

export const validateField = (
  name: keyof ProjectData,
  value: string,
  formData: ProjectData,
): string | null => {
  const trimmed = value.trim()

  if (!trimmed) return 'Este campo es requerido'

  switch (name) {
    case 'builder':
      if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(trimmed))
        return 'Solo se permiten letras'
      if (trimmed.length > 100) return 'Máximo 100 caracteres'
      if (trimmed.length < 3) return 'Mínimo 3 caracteres'
      return null
    case 'clientEmail':
      const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        trimmed,
      )
      return isValidEmail ? null : 'Ingrese un correo electrónico válido'
    // case 'startDate': {
    //   // console.log(trimmed, 'EN EL SWITCH')
    //   if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed))
    //     return 'Formato inválido. Usá AAAA-MM-DD'

    //   const [year, month, day] = trimmed.split('-').map(Number)
    //   //   console.log(year, 'AÑO DE VALIDATE')
    //   //   console.log(month, 'MES DE VALIDATE')
    //   if (year.toString().length !== 4)
    //     return 'El año debe tener 4 cifras válidas'
    //   if (month < 1 || month > 12) return 'El mes debe estar entre 1 y 12'
    //   if (day < 1 || day > 31) return 'El día debe estar entre 1 y 31'

    //   // Validamos con parseDate
    //   const iso = `${year}-${String(month).padStart(2, '0')}-${String(
    //     day,
    //   ).padStart(2, '0')}`
    //   try {
    //     const calendarDate = parseDate(iso)
    //     if (!calendarDate) return 'Fecha inválida'
    //   } catch {
    //     return 'Fecha inválida'
    //   }

    //   return null
    // }
    // case 'endDate': {
    //   console.log(trimmed, 'solo el endDate')
    //   if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed))
    //     return 'Formato inválido. Usá AAAA-MM-DD'

    //   const [year, month, day] = trimmed.split('-').map(Number)

    //   if (year.toString().length !== 4)
    //     return 'El año debe tener 4 cifras válidas'
    //   if (month < 1 || month > 12) return 'Mes inválido'
    //   if (day < 1 || day > 31) return 'Día inválido'

    //   const endDate = new Date(trimmed)
    //   if (isNaN(endDate.getTime())) return 'Fecha inválida'

    //   // Solo si hay fecha de inicio válida
    //   console.log(formData.startDate, endDate, 'EN VALIDATE')
    //   if (
    //     formData.startDate &&
    //     /^\d{4}-\d{2}-\d{2}$/.test(formData.startDate)
    //   ) {
    //     const start = new Date(formData.startDate)
    //     if (!isNaN(start.getTime()) && endDate <= start) {
    //       return 'La fecha de finalización debe ser posterior a la de inicio'
    //     }
    //   }

    //   return null
    // }
    // case 'startDate':
    // case 'endDate': {
    //   if (!/^\d{2}-\d{2}-\d{4}$/.test(trimmed))
    //     return 'Formato inválido. Usá DD-MM-AAAA'

    //   const [day, month, year] = trimmed.split('-').map(Number)

    //   if (year.toString().length !== 4)
    //     return 'El año debe tener 4 cifras válidas'
    //   if (month < 1 || month > 12) return 'Mes inválido'
    //   if (day < 1 || day > 31) return 'Día inválido'

    //   const iso = `${year}-${String(month).padStart(2, '0')}-${String(
    //     day,
    //   ).padStart(2, '0')}`
    //   const date = new Date(iso)
    //   if (isNaN(date.getTime())) return 'Fecha inválida'

    //   // Comparar endDate > startDate si aplica
    //   if (name === 'endDate' && formData.startDate) {
    //     const [sd, sm, sy] = formData.startDate.split('-').map(Number)
    //     const startISO = `${sy}-${String(sm).padStart(2, '0')}-${String(
    //       sd,
    //     ).padStart(2, '0')}`
    //     const start = new Date(startISO)

    //     if (!isNaN(start.getTime()) && date <= start)
    //       return 'La fecha de finalización debe ser posterior a la de inicio'
    //   }

    //   return null
    // }
    case 'startDate': {
      if (!/^\d{2}-\d{2}-\d{4}$/.test(trimmed))
        return 'Formato inválido. Usá DD-MM-AAAA'

      const [day, month, year] = trimmed.split('-').map(Number)

      if (year.toString().length !== 4)
        return 'El año debe tener 4 cifras válidas'
      if (month < 1 || month > 12) return 'Mes inválido'
      if (day < 1 || day > 31) return 'Día inválido'

      const iso = `${year}-${String(month).padStart(2, '0')}-${String(
        day,
      ).padStart(2, '0')}`
      const start = new Date(iso)
      if (isNaN(start.getTime())) return 'Fecha inválida'

      // 🔁 Validar que startDate < endDate si endDate ya existe
      if (formData.endDate && /^\d{2}-\d{2}-\d{4}$/.test(formData.endDate)) {
        const [ed, em, ey] = formData.endDate.split('-').map(Number)
        const endISO = `${ey}-${String(em).padStart(2, '0')}-${String(
          ed,
        ).padStart(2, '0')}`
        const end = new Date(endISO)

        if (!isNaN(end.getTime()) && start >= end)
          return 'La fecha de inicio debe ser anterior a la de finalización'
      }

      return null
    }

    case 'endDate': {
      if (!/^\d{2}-\d{2}-\d{4}$/.test(trimmed))
        return 'Formato inválido. Usá DD-MM-AAAA'

      const [day, month, year] = trimmed.split('-').map(Number)

      if (year.toString().length !== 4)
        return 'El año debe tener 4 cifras válidas'
      if (month < 1 || month > 12) return 'Mes inválido'
      if (day < 1 || day > 31) return 'Día inválido'

      const iso = `${year}-${String(month).padStart(2, '0')}-${String(
        day,
      ).padStart(2, '0')}`
      const end = new Date(iso)
      if (isNaN(end.getTime())) return 'Fecha inválida'

      // 🔁 Validar que endDate > startDate si startDate ya existe
      if (
        formData.startDate &&
        /^\d{2}-\d{2}-\d{4}$/.test(formData.startDate)
      ) {
        const [sd, sm, sy] = formData.startDate.split('-').map(Number)
        const startISO = `${sy}-${String(sm).padStart(2, '0')}-${String(
          sd,
        ).padStart(2, '0')}`
        const start = new Date(startISO)

        if (!isNaN(start.getTime()) && end <= start)
          return 'La fecha de finalización debe ser posterior a la de inicio'
      }

      return null
    }

    case 'name':
    case 'location':
    case 'clientName':
    case 'architect':
    case 'builder':
      if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(trimmed))
        return 'Solo se permiten letras'
      if (trimmed.length > 36) return 'Máximo 36 caracteres'
      if (trimmed.length < 3) return 'Mínimo 3 caracteres'
      return null
    case 'notes':
      if (trimmed.length > 200) return 'Máximo 200 caracteres'
      return null
    default:
      return null
  }
}
