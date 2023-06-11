import { FC } from 'react'
import { Room } from '../../../types'
import Table from '../../../components/UI/Table'
import { Card } from '../../../components';

interface RoomsProps {
  data: Room[];
}

const Rooms: FC<RoomsProps> = ({ data }) => {
  return (
    <Card title='Rooms'>
      <div className='overflow-x-auto'>
        <Table headers={['Image', 'Room Number', 'Category', 'Description', 'Actions']}>
          {data.map((room, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className='px-2 py-2 whitespace-nowrap'>
                <img src={room.image} alt={room.description} className='w-16 h-16 rounded-sm object-cover' />
              </td>
              <td className='px-2 py-2 whitespace-nowrap'>{room.room_number}</td>
              <td className='px-2 py-2 whitespace-nowrap'>{room.category}</td>
              <td className='px-2 py-2'>{room.description}</td>
              <td className='px-2 py-2'>
                <button
                  className='text-indigo-600 hover:text-indigo-900'
                  onClick={() => alert(`Needs cleaning for room: ${room.room_number}`)}
                >
                  Needs Cleaning
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
