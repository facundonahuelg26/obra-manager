import { Avatar } from '@heroui/avatar'
import { DropdownTrigger } from '@heroui/dropdown'
import { useSession } from 'next-auth/react'

const AvatarData = () => {
  const { data: session } = useSession()
  return (
    <DropdownTrigger>
      <Avatar
        as='button'
        className='transition-transform'
        name={session?.user?.name || ''}
        size='sm'
        src={session?.user?.image || ''}
      />
    </DropdownTrigger>
  )
}

export default AvatarData
