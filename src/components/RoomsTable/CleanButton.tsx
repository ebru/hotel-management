import { FC } from 'react'
import { ArrowPathRoundedSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface CleanButtonProps {
  isClean: boolean;
  onToggleRoomCleaning: () => void;
}

const CleanButton: FC<CleanButtonProps> = ({ isClean, onToggleRoomCleaning }) => (
  <button
    className={`inline-flex items-center justify-center space-x-2 text-sm px-3 py-2 rounded-md transition duration-200 ease-in-out ${isClean ?
      'bg-indigo-500 hover:bg-indigo-700 text-white' :
      'bg-red-500 hover:bg-red-700 text-white'
      }`}
    // TODO: Add modal confirmation for removing
    onClick={onToggleRoomCleaning}
  >
    {isClean ? (
      <ArrowPathRoundedSquareIcon className='h-5 w-5' />
    ) : (
      <XMarkIcon className='h-5 w-5' />
    )}
    <span>{isClean ? 'Needs cleaning' : 'Remove cleaning'}</span>
  </button>
)

export default CleanButton
