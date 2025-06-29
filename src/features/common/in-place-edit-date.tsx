import { useEffect, useState } from 'react'
import { DatePicker, Tooltip } from '@heroui/react'
import { Button } from '@heroui/button'
import { parseDate, getLocalTimeZone } from '@internationalized/date'
import { I18nProvider } from '@react-aria/i18n'
import RenderIcon from './render-icon'
import { ICONS } from '@/utils'
import { Typography } from './typography'
import { useLocale } from 'next-intl'
import { truncateText } from '@/utils/truncate-text'

interface InPlaceEditDateProps {
  title?: string
  value: string | null
  inputName: string
  errors?: string
  editedFields?: Record<string, boolean>
  handleChangeDataProject: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InPlaceEditDate = ({
  title,
  value,
  inputName,
  errors,
  editedFields,
  handleChangeDataProject,
}: InPlaceEditDateProps) => {
  const [open, setOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const locale = useLocale()
  // 📅 Hero UI usa objetos de tipo CalendarDate (de @internationalized/date)
  const toISO = (dateStr: string) => {
    const [day, month, year] = dateStr.split('-')
    if (!day || !month || !year) return null
    return `${year}-${month}-${day}`
  }

  const initialDateStr = value ? toISO(value) : null
  const initialDate = initialDateStr ? parseDate(initialDateStr) : null
  const [selectedDate, setSelectedDate] = useState(initialDate)

  const formatter = new Intl.DateTimeFormat(locale, { dateStyle: 'full' })
  useEffect(() => {
    if (!editedFields?.[inputName] && !isFocused) {
      setOpen(false)
    }
  }, [editedFields, inputName, isFocused])

  const handleChange = (date: typeof selectedDate) => {
    setSelectedDate(date)

    if (date) {
      const iso = date.toString() // '2025-01-25'
      const [year, month, day] = iso.split('-')
      const display = `${day}-${month}-${year}`
      const event = {
        target: {
          name: inputName,
          value: display,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>

      handleChangeDataProject(event)
    }
  }
  // console.log(selectedDate, 'FECHA SELECCIONADA')
  if (open) {
    return (
      <div className='w-full flex flex-col gap-2'>
        <I18nProvider locale={locale}>
          <DatePicker
            aria-label='Select date'
            variant='bordered'
            value={selectedDate ?? undefined}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isInvalid={!!errors}
            errorMessage={errors}
          />
        </I18nProvider>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-between'>
      <div>
        <Tooltip
          content={
            selectedDate
              ? formatter.format(selectedDate.toDate(getLocalTimeZone()))
              : '--'
          }
          color='secondary'
        >
          <Typography>
            {title}:{' '}
            {selectedDate
              ? truncateText(
                  formatter.format(selectedDate.toDate(getLocalTimeZone())),
                )
              : '--'}
          </Typography>
        </Tooltip>
      </div>
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

export default InPlaceEditDate
