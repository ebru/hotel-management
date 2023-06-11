import { createContext, FC, ReactNode, useState } from 'react';

interface ContextProps {
  roomsToClean: any;
  setRoomsToClean: (rooms: any) => void;
}
export const AppContext = createContext<ContextProps>({
  roomsToClean: {},
  setRoomsToClean: () => null,
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [roomsToClean, setRoomsToClean] = useState<any>({});

  return (
    <AppContext.Provider
      value={{
        roomsToClean,
        setRoomsToClean,
      }}>
      {children}
    </AppContext.Provider>
  );
};
