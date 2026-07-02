export interface Room {
  id: string;
  title: string;
  tagline: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  durationMins: number;
  minPlayers: number;
  maxPlayers: number;
  image: string;
}

export interface BookingDetails {
  roomId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  players: number;
}
