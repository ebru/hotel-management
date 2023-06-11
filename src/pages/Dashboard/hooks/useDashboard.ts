import hotelRooms from './../../../data/rooms.json'
import { useAppContext } from '../../../hooks'
import { generateOccupancyData } from './../../../utils/generateOccupancyData'
import { useCallback, useMemo } from 'react'

export const useDashboard = () => {
  const { roomsToCleanMap, toggleRoomCleaning } = useAppContext()

  const isClean = useCallback((id: string) => {
    return roomsToCleanMap[id] ? false : true;
  }, [roomsToCleanMap]);

  const occupancyData = useMemo(() => generateOccupancyData(), []);

  return {
    hotelRooms,
    occupancyData,
    toggleRoomCleaning,
    isClean,
    cleaningCount: Object.values(roomsToCleanMap).length,
  }
}
