import { ArrowPathRoundedSquareIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { Card } from '../../../components'
import { FC } from 'react';

interface OverviewProps {
  cleaningCount: number;
}

const Overview: FC<OverviewProps> = ({ cleaningCount }) => {
  return (
    <Card>
      <div className='flex flex-col sm:flex-row gap-x-10 gap-y-4 sm:gap-y-0'>
        <div className='flex items-center w-full md:w-1/6'>
          <ArrowPathRoundedSquareIcon className='h-8 w-8 text-indigo-500 mr-2' />
          <span>Cleaning: {cleaningCount}</span>
        </div>
        <div className='flex items-center w-full md:w-1/6'>
          <BuildingOfficeIcon className='h-8 w-8 text-blue-500 mr-2' />
          <span>Occupancy: 80%</span>
        </div>
      </div>
    </Card>
  )
}

export default Overview
