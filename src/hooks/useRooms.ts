
import { useCallback } from 'react'
import hotelRooms from './../data/rooms.json'
import useAppContext from './useAppContext'
import { Room } from '../types'

const useRooms = () => {
  const { roomsToCleanMap, toggleRoomCleaning } = useAppContext()

  const isClean = useCallback((id: string) => {
    return roomsToCleanMap[id] ? false : true;
  }, [roomsToCleanMap]);

  const getRoomsToClean = useCallback((): Room[] => {
    let roomsToClean = hotelRooms.filter(room => roomsToCleanMap[room.room_number]);

    roomsToClean.sort((a, b) => {
      const aTime = new Date(roomsToCleanMap[a.room_number]).getTime();
      const bTime = new Date(roomsToCleanMap[b.room_number]).getTime();
      return bTime - aTime;
    });

    return roomsToClean;
  }, [roomsToCleanMap]);

  return {
    hotelRooms,
    toggleRoomCleaning,
    isClean,
    cleaningCount: Object.values(roomsToCleanMap).length,
    roomsToCleanMap,
    roomsToClean: getRoomsToClean(),
  }
}

export default useRooms
