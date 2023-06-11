export interface Room {
  room_number: string;
  category: string;
  description: string;
  image: string;
}

export interface RoomsToCleanMap {
  [id: string]: string;
}

export interface Occupancy {
  date: string;
  Standard: number;
  Deluxe: number;
  Suite: number;
}
