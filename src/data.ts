import { Room } from './types';

export const ROOMS: Room[] = [
  {
    id: 'neon-protocol',
    title: 'Neon Protocol',
    tagline: 'Hack the mainframe. Save the city.',
    description: 'In the year 2084, a rogue AI has taken control of Sudbury\'s power grid. You and your team of elite hackers must infiltrate the server room, bypass the security protocols, and pull the plug before the city goes dark permanently. Fast-paced, high-tech, and neon-drenched.',
    difficulty: 4,
    durationMins: 60,
    minPlayers: 2,
    maxPlayers: 6,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'sudbury-syndicate',
    title: 'The Sudbury Syndicate',
    tagline: 'A local heist with global stakes.',
    description: 'The year is 1925. A notorious local syndicate has hidden a massive fortune of stolen gold deep within an abandoned mine shaft. You have one hour to navigate the treacherous tunnels, solve the syndicate\'s puzzles, and escape with the loot before the authorities arrive.',
    difficulty: 3,
    durationMins: 60,
    minPlayers: 4,
    maxPlayers: 8,
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'funhouse-frenzy',
    title: 'Funhouse Frenzy',
    tagline: 'The games have just begun.',
    description: 'Step right up! The abandoned carnival on the edge of town holds a dark secret. The whimsical games and colorful attractions are rigged, and the old Ringmaster isn\'t letting anyone leave until they beat his twisted puzzles. Playful, slightly creepy, and incredibly fun.',
    difficulty: 5,
    durationMins: 75,
    minPlayers: 2,
    maxPlayers: 6,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000'
  }
];

export const TIME_SLOTS = [
  '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '10:00 PM'
];
