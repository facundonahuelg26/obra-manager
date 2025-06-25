'use client'
import { tabsInfo } from './tabs-elements'
import GeneralInfo from './general-info'
import TestDetailsTwo from './test-details-two'
import AnalyticsByProject from './analytics-by-project'
import ContentInTabs from './content-in-tabs'
import SaveChanges from './save-changes'
import { Card, CardBody } from '@heroui/card'
// import { useEditProjectContext } from '@/features/common/edit-project-context'
// import { Form } from '@heroui/react'
// import { Form } from '@heroui/form'

const AllDetails = () => {
  const components = [
    <GeneralInfo key='general-info' />,
    <TestDetailsTwo key='test-details-two' />,
    <AnalyticsByProject key='analytics-by-project' />,
  ]
  const mergeData = tabsInfo.map(
    (item: { id: string; label: string }, index: number) => ({
      ...item,
      ...{ content: components[index] },
    }),
  )
  return (
    <>
      <SaveChanges />

      <Card className='w-full bg-default/5'>
        <CardBody>
          <ContentInTabs tabsData={mergeData} ariaLabel='Dynamic tabs info' />
        </CardBody>
      </Card>
    </>
  )
  // return <ContentInTabs tabsData={mergeData} ariaLabel='Dynamic tabs info' />
}

export default AllDetails
