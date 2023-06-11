import { createContext, FC, ReactNode, useState } from 'react';

interface RoomToClean {
  [id: string]: string;
}

interface ContextProps {
  roomsToCleanMap: RoomToClean;
  toggleRoomCleaning: (id: string) => void;
}

export const AppContext = createContext<ContextProps>({
  roomsToCleanMap: {},
  toggleRoomCleaning: () => null,
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [roomsToCleanMap, setRoomsToCleanMap] = useState<RoomToClean>({});

  const addRoomToClean = (id: string) => {
    setRoomsToCleanMap(prev => ({
      ...prev,
      [id]: new Date().toISOString(),
    }));
  };

  const removeRoomFromClean = (id: string) => {
    setRoomsToCleanMap(prev => {
      const newRooms = { ...prev };
      delete newRooms[id];
      return newRooms;
    });
  };

  const toggleRoomCleaning = (id: string) => {
    return roomsToCleanMap[id] ? removeRoomFromClean(id) : addRoomToClean(id)
  }

  return (
    <AppContext.Provider
      value={{
        roomsToCleanMap,
        toggleRoomCleaning,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
