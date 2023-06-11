
import { FC } from 'react';
import { ArrowPathRoundedSquareIcon, BuildingOfficeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Card, OverviewCell } from '../../../components'

interface OverviewProps {
  cleaningCount: number;
}

const Overview: FC<OverviewProps> = ({ cleaningCount }) => {
  return (
    <Card>
      <div className='flex flex-col sm:flex-row gap-x-10 gap-y-4 sm:gap-y-0'>
        <div className='w-full md:w-1/6'>
          <OverviewCell
            title='Cleaning'
            data={cleaningCount}
            link={'/cleaning'}
            renderIcon={() => <ArrowPathRoundedSquareIcon className='h-8 w-8 text-indigo-500 mr-2' />}
          />
        </div>
        <div className='flex items-center w-full md:w-1/6'>
          <OverviewCell
            title='Occupancy'
            // Some dummy data
            data='80%'
            renderIcon={() => <BuildingOfficeIcon className='h-8 w-8 text-blue-500 mr-2' />}
          />
        </div>
        <div className='flex items-center w-full md:w-1/6'>
          <OverviewCell
            title='Revenue'
            // Some dummy data
            data='$840'
            renderIcon={() => <CurrencyDollarIcon className='h-8 w-8 text-green-500 mr-2' />}
          />
        </div>
      </div>
    </Card>
  )
}

export default Overview
