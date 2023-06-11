import hotelRooms from './../../data/rooms.json'
import { generateOccupancyData } from './../../utils/generateOccupancyData'

import { Card } from '../../components'
import { Occupancy, Overview, Rooms } from './components'

const Dashboard = () => {
  return (
    <div className='p-8 flex flex-col gap-5'>
      <h1 className='text-xl'>Dashboard</h1>
      <Overview />
      <div className='flex flex-col sm:flex-row gap-x-10 gap-y-4 sm:gap-y-0 mt-2'>
        <div className='w-full sm:w-1/2'>
          <Rooms data={hotelRooms} />
        </div>
        <div className='w-full sm:w-1/2'>
          <Occupancy data={generateOccupancyData()} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
