import React from 'react'
import { Input } from '@heroui/input'
import RenderIcon from '../render-icon'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown'
import { Button } from '@heroui/button'
import { Divider } from '@heroui/divider'

interface StatusOption {
  uid: string
  name: string
}

interface Column {
  uid: string
  name: string
}

interface TopContentProps {
  onSearchChange: (value?: string) => void
  onGetSearchParams: () => string
  onSearchPress: () => void
  onClearSearch: () => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  // statusFilter: string
  // visibleColumns: string[]
  // statusOptions: StatusOption[]
  columns: Column[]
}
export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : ''
}

const TopContent: React.FC<TopContentProps> = ({
  onSearchChange,
  onGetSearchParams,
  onSearchPress,
  onClearSearch,
  onKeyDown,
  // statusFilter,
  // visibleColumns,
  // statusOptions,
  columns,
}) => {
  return (
    <div className='p-4 flex flex-col gap-4'>
      <div className='flex justify-between gap-3 items-end'>
        <Input
          // isClearable
          key={onGetSearchParams()}
          classNames={{
            base: 'w-full sm:max-w-[44%]',
            inputWrapper: 'border-1',
          }}
          placeholder='Search by name...'
          size='sm'
          endContent={
            onGetSearchParams() ? (
              <button onClick={onClearSearch}>
                <RenderIcon dataIcon='material-symbols:close' />
              </button>
            ) : (
              <button onClick={onSearchPress}>
                <RenderIcon dataIcon='material-symbols:search' />
              </button>
            )
          }
          // value={filterValue}
          variant='bordered'
          // onClear={() => setFilterValue('')}
          // onValueChange={(e) => onSearchChange(e.target.value)}
          defaultValue={onGetSearchParams()}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={onKeyDown}
        />
        {/* <Button onPress={onSearchPress}>
          Buscar
        </Button> */}
        <div className='flex gap-3'>
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
                variant='flat'
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label='Table Columns'
              closeOnSelect={false}
              selectedKeys='{statusFilter}'
              selectionMode='multiple'
              //onSelectionChange={setStatusFilter}
            >
              {[
                { uid: 'active', name: 'Active' },
                { uid: 'paused', name: 'Paused' },
                { uid: 'vacation', name: 'Vacation' },
              ].map((status: StatusOption) => (
                <DropdownItem key={status.uid} className='capitalize'>
                  {capitalize(status.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
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
                variant='flat'
              >
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label='Table Columns'
              closeOnSelect={false}
              selectedKeys='{visibleColumns}'
              selectionMode='multiple'
              // onSelectionChange={setVisibleColumns}
            >
              {columns.map((column) => (
                <DropdownItem key={column.uid} className='capitalize'>
                  {capitalize(column.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            className='bg-foreground text-background font-semibold'
            endContent={<RenderIcon dataIcon='ic:baseline-plus' />}
            size='md'
          >
            NUEVO PROYECTO
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  )
}

export default React.memo(TopContent)
