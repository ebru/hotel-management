import hotelRooms from './../../../data/rooms.json'
import { useAppContext } from '../../../hooks'
import { generateOccupancyData } from './../../../utils/generateOccupancyData'
import { useCallback, useMemo } from 'react'

export const useDashboard = () => {
  const { roomsToCleanMap, addRoomToClean, removeRoomFromClean } = useAppContext()

  const onToggleRoomCleaning = (id: string) => {
    return roomsToCleanMap[id] ? removeRoomFromClean(id) : addRoomToClean(id)
  }

  const getCleanButtonText = useCallback((id: string) => {
    return roomsToCleanMap[id] ? 'Remove cleaning' : 'Needs cleaning';
  }, [roomsToCleanMap]);

  const occupancyData = useMemo(() => generateOccupancyData(), []);

  return {
    hotelRooms,
    occupancyData,
    onToggleRoomCleaning,
    getCleanButtonText,
    cleaningCount: Object.values(roomsToCleanMap).length,
  }
}
