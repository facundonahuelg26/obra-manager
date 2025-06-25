import { Link } from '@heroui/link'
import { Listbox, ListboxItem } from '@heroui/listbox'
import RenderIcon from '../common/render-icon'
import { MenuItem } from './menu-data'
const NavList = ({
  items,
  pathname,
}: {
  items: MenuItem[]
  pathname: string
}) => {
  return (
    <Listbox
      aria-label='Dynamic Actions'
      items={items}
      onAction={(key) => alert(key)}
    >
      {(item: MenuItem) => (
        <ListboxItem
          key={item.link}
          textValue={item.title}
          className={`py-2.5 ${item.link === pathname ? 'bg-default' : ''}`}
        >
          <Link
            href={item.link}
            // className={`${
            //   item.link === pathname
            //     ? 'font-semibold text-primary'
            //     : 'text-foreground'
            // } flex items-center gap-2 tracking-wider text-sm`} // usamos flex normal
            className={`text-foreground flex items-center gap-2 tracking-wider`}
            showAnchorIcon
            anchorIcon={
              <div className='order-first flex-shrink-0'>
                <RenderIcon dataIcon={item.icon} />
              </div>
            }
          >
            {item.title}
          </Link>
        </ListboxItem>
      )}
    </Listbox>
  )
}

export default NavList
