'use client'
import React, { SVGProps } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  // Selection,
} from '@heroui/table'
import { Chip, ChipProps } from '@heroui/chip'
import { Button } from '@heroui/button'
import RenderIcon from '../common/render-icon'
import { Tooltip } from '@heroui/tooltip'
import TopContent from './top-content'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import BottomContent from './bottom-content'
import { Card } from '@heroui/card'
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export const columns = [
  { name: 'ID', uid: 'id' },
  { name: 'SYMBOL', uid: 'symbol' },
  { name: 'CURRENT_PRICE', uid: 'current_price' },
  { name: 'MARKET_CAP', uid: 'market_cap' },
  { name: 'ACTIONS', uid: 'actions' },
]

export const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'active',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Technical Lead',
    team: 'Development',
    status: 'paused',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Senior Developer',
    team: 'Development',
    status: 'active',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'Community Manager',
    team: 'Marketing',
    status: 'vacation',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'Sales Manager',
    team: 'Sales',
    status: 'active',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
]

const statusColorMap: Record<string, ChipProps['color']> = {
  btc: 'success',
  eth: 'danger',
  sol: 'warning',
  ada: 'primary',
  doge: 'secondary',
}

export const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Paused', uid: 'paused' },
  { name: 'Vacation', uid: 'vacation' },
]
// const INITIAL_VISIBLE_COLUMNS = ['name', 'role', 'status', 'actions']

interface IData {
  data: []
}
export default function AllProjects({ data }: IData) {
  // const [filterValue, setFilterValue] = React.useState('')
  // const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
  //   new Set(INITIAL_VISIBLE_COLUMNS),
  // )
  // const [statusFilter] = React.useState<Selection>('all')
  // const [rowsPerPage, setRowsPerPage] = React.useState(5)
  // const [page, setPage] = React.useState(1)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  // const onRowsPerPageChange = React.useCallback(
  //   (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setRowsPerPage(Number(e.target.value))
  //     setPage(1)
  //   },
  //   [],
  // )
  const onGetSearchParams = () => {
    return searchParams.get('vs_currency')?.toString() || ''
  }
  let searchValue = onGetSearchParams()
  const onSearchChange = (value?: string) => {
    searchValue = value || ''
    if (!searchValue.trim()) {
      onClearSearch()
    }
    // const params = new URLSearchParams(searchParams)
    // if (value) {
    //   console.log(value, 'VALOR')
    //   params.set('vs_currency', value)
    //   // setFilterValue(value)
    //   setPage(1)
    // } else {
    //   params.delete('vs_currency')
    //   // setFilterValue('')
    // }
    // replace(`${pathname}?${params.toString()}`)
  }

  const onSearchPress = () => {
    const params = new URLSearchParams(searchParams)

    if (searchValue) {
      console.log(searchValue, 'VALOR')
      params.set('vs_currency', searchValue)
      // setPage(1)
    } else {
      params.delete('vs_currency')
    }

    replace(`${pathname}?${params.toString()}`)
  }
  const onClearSearch = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('vs_currency') // Elimina el parámetro
    replace(`${pathname}`) // 🔥 Vuelve a la URL original sin query params
  }

  // 🔥 Nueva función para detectar "Enter"
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchPress()
    }
  }

  return (
    <div className='flex flex-col gap-4 max-w-xs sm:max-w-2xl lg:max-w-full'>
      <Card>
        <TopContent
          onSearchChange={onSearchChange}
          onGetSearchParams={onGetSearchParams}
          onSearchPress={onSearchPress}
          onClearSearch={onClearSearch}
          onKeyDown={onKeyDown}
          // statusFilter={statusFilter}
          // setStatusFilter={setStatusFilter}
          // visibleColumns={visibleColumns}
          // setVisibleColumns={setVisibleColumns}
          // users={users}
          // onRowsPerPageChange={onRowsPerPageChange}
          // statusOptions={statusOptions}
          columns={columns}
        />
      </Card>

      <Table
        aria-label='Example table with custom cells'
        bottomContent={<BottomContent total={data} />}
        isStriped={true}
        // className='max-w-[300px]'
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item: { id: string; name: string; symbol: string }) => (
            <TableRow key={item.id}>
              {(columnKey) => {
                if (columnKey === 'symbol') {
                  return (
                    <TableCell>
                      <Chip
                        // className='uppercase font-extrabold'
                        color={statusColorMap[item.symbol]}
                        size='sm'
                        radius='md'
                        variant='flat'
                      >
                        <span className='uppercase font-semibold'>
                          {getKeyValue(item, columnKey)}
                        </span>
                      </Chip>
                    </TableCell>
                  )
                }
                if (columnKey === 'actions') {
                  return (
                    <TableCell>
                      <div className='relative flex items-center gap-2'>
                        <Tooltip content='Details'>
                          <Button isIconOnly variant='flat'>
                            <RenderIcon dataIcon='mdi:eye' />
                          </Button>
                        </Tooltip>
                        <Tooltip content='Edit user'>
                          <Button isIconOnly variant='flat'>
                            <RenderIcon dataIcon='material-symbols:edit' />
                          </Button>
                        </Tooltip>
                        <Tooltip color='danger' content='Delete user'>
                          <Button isIconOnly color='danger' variant='flat'>
                            <RenderIcon dataIcon='material-symbols:delete' />
                          </Button>
                        </Tooltip>
                      </div>
                    </TableCell>
                  )
                }

                if (columnKey === 'id') {
                  return (
                    <TableCell>
                      <strong>{getKeyValue(item, columnKey)}</strong>
                    </TableCell>
                  )
                }

                return <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
