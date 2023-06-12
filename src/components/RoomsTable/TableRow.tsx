import { FC } from 'react'
import { Room } from '../../types'
import CleanButton from './CleanButton';

interface TableRowProps {
  room: Room;
  index: number;
  onToggleRoomCleaning: (id: string) => void;
  isClean: (id: string) => boolean;
}

const TableRow: FC<TableRowProps> = ({ room, index, onToggleRoomCleaning, isClean }) => (
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
)

export default TableRow
