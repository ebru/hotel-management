import { FC } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Room } from '../../types'
import Card from '../UI/Card';
import Table from '../UI/Table';
import TableRow from './TableRow';

interface RoomsProps {
  title?: string;
  data: Room[];
  onToggleRoomCleaning: (id: string) => void;
  isClean: (id: string) => boolean,
}

const RoomsTable: FC<RoomsProps> = ({ title, data, onToggleRoomCleaning, isClean }) => {
  return (
    <Card title={title}>
      <div className='overflow-x-auto'>
        {!data.length && (
          <div className='flex flex-col items-center justify-center space-y-3'>
            <CheckIcon className='h-12 w-12 text-gray-400' />
            <h2 className='text-lg text-gray-700 font-semibold'>No Rooms in Cleaning</h2>
            <p className='text-gray-500'>All rooms are clean!</p>
          </div>
        )}
        {data.length > 0 && (
          <Table headers={['Image', 'Number', 'Category', '']}>
            {data.map((room, index) => (
              <TableRow
                key={index}
                index={index}
                room={room}
                onToggleRoomCleaning={onToggleRoomCleaning}
                isClean={isClean}
              />
            ))}
          </Table>
        )}
      </div>
    </Card>
  )
}

export default RoomsTable
