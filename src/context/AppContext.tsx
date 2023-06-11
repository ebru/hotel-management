import { createContext, FC, ReactNode, useState } from 'react';

interface RoomToClean {
  [id: string]: string;
}

interface ContextProps {
  roomsToCleanMap: RoomToClean;
  addRoomToClean: (id: string) => void;
  removeRoomFromClean: (id: string) => void;
}

export const AppContext = createContext<ContextProps>({
  roomsToCleanMap: {},
  addRoomToClean: () => null,
  removeRoomFromClean: () => null,
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

  return (
    <AppContext.Provider
      value={{
        roomsToCleanMap,
        addRoomToClean,
        removeRoomFromClean,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
