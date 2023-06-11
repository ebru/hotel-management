import { useRooms } from '../../../hooks'
import { generateOccupancyData } from './../../../utils/generateOccupancyData'
import { useMemo } from 'react'

export const useDashboard = () => {
  const { hotelRooms, roomsToCleanMap, toggleRoomCleaning, isClean } = useRooms()

  const occupancyData = useMemo(() => generateOccupancyData(), []);

  return {
    hotelRooms,
    occupancyData,
    toggleRoomCleaning,
    isClean,
    cleaningCount: Object.values(roomsToCleanMap).length,
  }
}
