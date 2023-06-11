import { MainLayout } from '../../layouts'
import { RoomsTable } from '../../components'
import { useRooms } from '../../hooks'

const Cleaning = () => {
  const { roomsToClean, toggleRoomCleaning, isClean } = useRooms()

  return (
    <MainLayout title='Cleaning'>
      <div className='flex flex-col sm:flex-row gap-x-10 gap-y-4 sm:gap-y-0 mt-2'>
        <div className='w-full sm:w-1/2'>
          <RoomsTable
            data={roomsToClean}
            onToggleRoomCleaning={toggleRoomCleaning}
            isClean={isClean}
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default Cleaning
