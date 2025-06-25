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
}
