'use client'
import Comments from './comments'
import ContentInTabs from './content-in-tabs'
import History from './history'
import { tabsUsers } from './tabs-elements'

const HistoryAndComments = () => {
  const components = [
    <Comments key='general-info' />,
    <History key='test-details-two' />,
  ]
  const mergeData = tabsUsers.map(
    (item: { id: string; label: string }, index: number) => ({
      ...item,
      ...{ content: components[index] },
    }),
  )
  return <ContentInTabs tabsData={mergeData} ariaLabel='Dynamic tabs users' />
}

export default HistoryAndComments
