import { FC } from 'react'
import { ArrowPathRoundedSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Room } from '../../../types'
import { Card, Table } from '../../../components';

interface RoomsProps {
  data: Room[];
  onToggleRoomCleaning: (id: string) => void;
  getCleanButtonText: (id: string) => string,
}

const Rooms: FC<RoomsProps> = ({ data, onToggleRoomCleaning, getCleanButtonText }) => {
  return (
    <Card title='Rooms'>
      <div className='overflow-x-auto'>
        <Table headers={['Image', 'Number', 'Category', '']}>
          {data.map((room, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className='px-2 py-2 whitespace-nowrap w-10'>
                <img src={room.image} alt={room.description} className='w-16 h-16 rounded-sm object-cover' />
              </td>
              <td className='px-2 py-2 whitespace-nowrap text-right w-20'>{room.room_number}</td>
              <td className='px-2 py-2 whitespace-nowrap w-20'>{room.category}</td>
              <td className='px-2 py-2 text-right w-100'>
                <button
                  className={`inline-flex items-center justify-center space-x-2 text-sm px-3 py-2 rounded-md transition duration-200 ease-in-out ${getCleanButtonText(room.room_number) === 'Needs cleaning' ?
                    'bg-indigo-500 hover:bg-indigo-700 text-white' :
                    'bg-red-500 hover:bg-red-700 text-white'
                    }`}
                  onClick={() => onToggleRoomCleaning(room.room_number)}
                >
                  {getCleanButtonText(room.room_number) === 'Needs cleaning' ? (
                    <ArrowPathRoundedSquareIcon className='h-5 w-5' />
                  ) : (
                    <XMarkIcon className='h-5 w-5' />
                  )}
                  <span>{getCleanButtonText(room.room_number)}</span>
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </Card>
  )
}

export default Rooms
