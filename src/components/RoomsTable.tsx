import { FC } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Room } from '../types'
import Card from './UI/Card';
import Table from './UI/Table';
import CleanButton from './CleanButton';

interface RoomsProps {
  title?: string;
  data: Room[];
  onToggleRoomCleaning: (id: string) => void;
  isClean: (id: string) => boolean,
}

const RoomsTable: FC<RoomsProps> = ({ title, data, onToggleRoomCleaning, isClean }) => {
  console.log('rerender')
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
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className='px-2 py-2 whitespace-nowrap w-10'>
                  <img src={room.image} alt={room.description} className='w-16 h-16 rounded-sm object-cover' />
                </td>
                <td className='px-2 py-2 whitespace-nowrap text-right w-20'>{room.room_number}</td>
                <td className='px-2 py-2 whitespace-nowrap w-20'>{room.category}</td>
                <td className='px-2 py-2 text-right w-100'>
                  <CleanButton
                    isClean={isClean(room.room_number)}
                    onToggleRoomCleaning={() => onToggleRoomCleaning(room.room_number)}
                  />
                </td>
              </tr>
            ))}
          </Table>
        )}
      </div>
    </Card>
  )
}

export default RoomsTable
