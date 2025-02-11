// TODO: Absolute import config for cleaner import statements
import { MainLayout } from '../../layouts'
import { RoomsTable } from '../../components'
import { Occupancy, Overview } from './components'
import { useDashboard } from './hooks/useDashboard'

const Dashboard = () => {
  const {
    hotelRooms,
    occupancyData,
    toggleRoomCleaning,
    isClean,
    cleaningCount,
  } = useDashboard()

  return (
    <MainLayout title='Dashboard'>
      <Overview
        cleaningCount={cleaningCount}
      />
      <div className='flex flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-0 mt-4'>
        <div className='w-full sm:w-1/2'>
          <RoomsTable
            title='All rooms'
            data={hotelRooms}
            onToggleRoomCleaning={toggleRoomCleaning}
            isClean={isClean}
          />
        </div>
        <div className='w-full sm:w-1/2'>
          <Occupancy data={occupancyData} />
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard
