import Grid from '@/features/common/grid'
import { Card, CardBody, CardHeader } from '@heroui/card'
// import { Tab, Tabs } from '@heroui/tabs'
import { projectData } from './tabs-elements'
import { Chip } from '@heroui/chip'
import { Divider } from '@heroui/divider'
import ProjectCostPieChart from './project-cost-pie-chart'
// import ModalDelete from '@/features/common/modal-delete'
import CustomButton from '@/features/common/custom-button'
import { Typography } from '@/features/common/typography'
// import { useEditInfo } from '@/features/common/use-edit-info'
// import { FormEvent } from 'react'
// import DropdownSelectForm, {
//   Option,
// } from '@/features/common/in-place-edit-select'
import InPlaceEditText from '@/features/common/in-place-edit-text'
import ContentInTabs from './content-in-tabs'
import { useEditProjectContext } from '@/features/common/edit-project-context'
import { Option, ProjectData } from '@/features/common/project-interface'
// import InPlanceEditSelect from '@/features/common/in-place-edit-select'
import InPlaceEditSelect from '@/features/common/in-place-edit-select'
import InPlaceEditDate from '@/features/common/in-place-edit-date'

const statusOptions: Option[] = [
  { key: 'pending', label: 'Pendiente', color: 'warning' },
  { key: 'approved', label: 'Aprobado', color: 'success' },
  { key: 'rejected', label: 'Rechazado', color: 'danger' },
]
interface FieldConfig {
  title?: string
  value?: string | null
  chip?: boolean
  option?: Option
  options?: Option[]
  inputName: keyof ProjectData
  errors?: string
  type?: string
}

export const ProjectDataCard = ({
  client,
  others,
}: {
  client?: boolean
  others?: boolean
}) => {
  const { formDataProject, errors, handleChangeDataProject, editedFields } =
    useEditProjectContext()
  const fields: FieldConfig[] = [
    {
      title: 'Nombre',
      inputName: 'name',
      value: formDataProject.name,
      errors: errors?.['name'],
    },
    {
      title: 'Ubicación',
      inputName: 'location',
      value: formDataProject.location,
      errors: errors?.['location'],
    },
    {
      title: 'Inicio',
      inputName: 'startDate',
      value: formDataProject.startDate,
      type: 'date',
      errors: errors?.['startDate'],
    },
    {
      title: 'Finalización',
      inputName: 'endDate',
      value: formDataProject.endDate,
      type: 'date',
      errors: errors?.['endDate'],
    },
    {
      title: 'Estado',
      inputName: 'status',
      option: formDataProject.status,
      options: statusOptions,
      type: 'select',
    },
  ]
  if (client) {
    const clientFields: FieldConfig[] = [
      {
        title: 'Cliente',
        inputName: 'clientName',
        value: formDataProject.clientName,
        errors: errors?.['clientName'],
      },
      {
        title: 'Correo',
        inputName: 'clientEmail',
        value: formDataProject.clientEmail,
        errors: errors?.['clientEmail'],
      },
    ]

    return (
      <CardBody className='flex flex-col gap-4'>
        {clientFields.map((field) => (
          <InPlaceEditText
            key={field.inputName}
            title={field.title}
            value={field.value || ''}
            inputName={field.inputName}
            errors={field.errors}
            editedFields={editedFields}
            handleChangeDataProject={handleChangeDataProject}
          />
        ))}
      </CardBody>
    )
  }

  if (others) {
    const othersFields: FieldConfig[] = [
      {
        title: 'Arquitecto',
        inputName: 'architect',
        value: formDataProject.architect,
        errors: errors?.['architect'],
      },
      {
        title: 'Constructor',
        inputName: 'builder',
        value: formDataProject.builder,
        errors: errors?.['builder'],
      },
      {
        title: 'Observaciones',
        inputName: 'notes',
        value: formDataProject.notes,
        errors: errors?.['notes'],
      },
    ]

    return (
      <CardBody className='flex flex-col gap-4'>
        {othersFields.map((field) => (
          <InPlaceEditText
            key={field.inputName}
            title={field.title}
            value={field.value || ''}
            inputName={field.inputName}
            errors={field.errors}
            editedFields={editedFields}
            handleChangeDataProject={handleChangeDataProject}
          />
        ))}
      </CardBody>
    )
  }
  return (
    <CardBody className='flex flex-col gap-4'>
      {fields.map((field) => {
        switch (field.type) {
          case 'select':
            if (field.option && field.options) {
              return (
                <InPlaceEditSelect
                  key={field.inputName}
                  title={field.title}
                  option={field.option}
                  options={field.options}
                  inputName={field.inputName}
                  editedFields={editedFields}
                  handleChangeDataProject={handleChangeDataProject}
                />
              )
            }
            return null

          case 'date':
            return (
              <InPlaceEditDate
                key={field.inputName}
                title={field.title}
                value={field.value || ''}
                errors={field.errors}
                inputName={field.inputName}
                editedFields={editedFields}
                handleChangeDataProject={handleChangeDataProject}
              />
            )

          default:
            return (
              <InPlaceEditText
                key={field.inputName}
                title={field.title}
                value={field.value || ''}
                inputName={field.inputName}
                errors={field.errors}
                editedFields={editedFields}
                handleChangeDataProject={handleChangeDataProject}
              />
            )
        }
      })}
    </CardBody>
  )
}

const GeneralInfo = () => {
  const components = [
    <ProjectDataCard key='project' />,
    <ProjectDataCard key='client' client />,
    <ProjectDataCard key='others' others />,
  ]
  const mergeData = projectData.map(
    (item: { id: string; label: string }, index: number) => ({
      ...item,
      ...{ content: components[index] },
    }),
  )
  return (
    <Grid container gap={4}>
      <Grid item xs={12} sm={6} xxl={4}>
        <Card className='p-4 h-96'>
          <ContentInTabs
            tabsData={mergeData}
            ariaLabel='Dynamic project data'
            variant='underlined'
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} xxl={4}>
        <Card className='p-4 h-96'>
          <CardBody className='flex flex-col gap-4'>
            <ProjectCostPieChart />
          </CardBody>
        </Card>
      </Grid>

      <Grid item xs={12} xxl={4}>
        <Card className='p-4 h-96'>
          <CardHeader className='flex items-start flex-col gap-4'>
            <Typography variant='h2'>Monto total del proyecto</Typography>
            <Chip color='success' size='sm' variant='flat'>
              USD 50.000
            </Chip>
          </CardHeader>

          <CardBody className='flex flex-col gap-4 overflow-y-auto'>
            <Divider />
            <Typography variant='h3'>Ultimos materiales agregados</Typography>
            <div className='flex items-center justify-between gap-2'>
              <Typography className='min-w-16'>Cemento</Typography>
              <Chip color='primary' size='sm' variant='flat'>
                Cant: 100 U
              </Chip>
              <Chip color='success' size='sm' variant='flat'>
                USD 2.000
              </Chip>
            </div>
            <div className='flex items-center justify-between gap-2'>
              <Typography className='min-w-16'>Piedra</Typography>
              <Chip color='primary' size='sm' variant='flat'>
                Cant: 10 M3
              </Chip>
              <Chip color='success' size='sm' variant='flat'>
                USD 2.000
              </Chip>
            </div>
            <div className='flex items-center justify-between gap-2'>
              <Typography className='min-w-16'>Arena</Typography>
              <Chip color='primary' size='sm' variant='flat'>
                Cant: 3 M3
              </Chip>
              <Chip color='success' size='sm' variant='flat'>
                USD 3.000
              </Chip>
            </div>
            <CustomButton variant='ghost' color='secondary'>
              Ver más materiales
            </CustomButton>
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  )
}

export default GeneralInfo
