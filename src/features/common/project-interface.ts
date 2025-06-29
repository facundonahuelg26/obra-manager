export interface Option {
  key: string
  label: string
  color: string
}
export interface ProjectData {
  name: string | null
  location: string | null
  status: Option
  startDate: string | null
  endDate: string | null
  clientName: string
  clientEmail: string
  architect: string
  builder: string
  notes: string
}
export type CustomChangeEvent = {
  target: {
    name: string
    value: string | Option // ✅ acá el tipo exacto, nada de `any`
  }
}
