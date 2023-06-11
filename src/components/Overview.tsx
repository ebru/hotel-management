import { ArrowPathRoundedSquareIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid'

const Overview = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col sm:flex-row gap-x-10 gap-y-4 sm:gap-y-0'>
        <div className='flex items-center'>
          <ArrowPathRoundedSquareIcon className='h-8 w-8 text-green-500 mr-2' />
          <span>Cleaning: 20</span>
        </div>
        <div className='flex items-center'>
          <BuildingOfficeIcon className='h-8 w-8 text-blue-500 mr-2' />
          <span>Occupancy: 80%</span>
        </div>
      </div>
    </div>
  )
}

export default Overview
