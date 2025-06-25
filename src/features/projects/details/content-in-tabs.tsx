import { Tab, Tabs } from '@heroui/tabs'

interface TabData {
  id: string
  label: string
  content: React.ReactNode
}

interface ContentInTabsProps {
  tabsData: TabData[]
  ariaLabel: string
  variant?: 'solid' | 'light' | 'underlined' | 'bordered' | undefined
}

const ContentInTabs = ({
  tabsData,
  ariaLabel,
  variant,
}: ContentInTabsProps) => {
  return (
    <Tabs aria-label={ariaLabel} items={tabsData} variant={variant}>
      {(item) => (
        <Tab key={item.id} title={item.label}>
          {item.content}
        </Tab>
      )}
    </Tabs>
  )
}
export default ContentInTabs
