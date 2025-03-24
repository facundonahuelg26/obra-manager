import { Button } from '@heroui/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown'
import React from 'react'
import RenderIcon from '../render-icon'

interface BottomContentProps {
  total: []
}
const BottomContent = ({ total }: BottomContentProps) => {
  return (
    <div className='flex justify-between items-center'>
      <span className='text-default-400 text-small'>
        Total {total.length} users
      </span>
      <Dropdown>
        <DropdownTrigger className='hidden sm:flex'>
          <Button
            endContent={
              <RenderIcon
                dataIcon='dashicons:arrow-down'
                // className='w-1 h-1 !text-xs'
              />
            }
            size='md'
            variant='light'
          >
            Rows per page:
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label='Table Columns'
          closeOnSelect={false}

          // selectedKeys={statusFilter}
          //onSelectionChange={setStatusFilter}
        >
          {[
            { value: '5', number: 5 },
            { value: '10', number: 10 },
            { value: '15', number: 15 },
          ].map((itemPerPage) => (
            <DropdownItem key={itemPerPage.value} className='capitalize'>
              {itemPerPage.number}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {/* <label className='flex items-center text-default-400 text-small'>
              Rows per page:
              <select
                className='bg-transparent outline-none text-default-400 text-small'
                onChange={onRowsPerPageChange}
              >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
              </select>
            </label> */}
    </div>
  )
}

export default BottomContent
