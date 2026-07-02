import { Room } from './types';
import movieNightImg from '../assets/movie_night.png';
import treasureCoveImg from '../assets/treasure_cove.png';
import ratRaceImg from '../assets/rat_race.png';
import lastCallImg from '../assets/last_call.png';
import sterlingHeistImg from '../assets/sterling_heist.png';

export const COMPANY_INFO = {
  name: 'Puzzled Escape Rooms',
  phone: '(705) 885-9854',
  email: 'PuzzledEscapeRooms@gmail.com',
  address: '2335 Lasalle Blvd, Sudbury, ON P3A 2A9',
  facebookUrl: 'https://www.facebook.com/puzzledescaperooms',
  instagramUrl: 'https://www.instagram.com/puzzled.escape.rooms/',
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tuesday', time: '3:30 PM - 10:00 PM' },
    { days: 'Wednesday', time: '3:30 PM - 10:00 PM' },
    { days: 'Thursday', time: '3:30 PM - 10:00 PM' },
    { days: 'Friday', time: '12:00 PM - 11:00 PM' },
    { days: 'Saturday', time: '12:00 PM - 11:00 PM' },
    { days: 'Sunday', time: '12:00 PM - 9:00 PM' }
  ]
};

export const ROOMS: Room[] = [
  {
    id: 'movie-night',
    title: 'Movie Night',
    tagline: 'Make it a Blockbuster night... if you can escape!',
    description: "It's 2005 and Star Wars comes out on DVD tomorrow. You are a team of superfans, and have a viewing party planned, but your bosses won't give you the day off to go rent a copy. If you wait until after work to go, all the copies will be rented! Breaking in tonight to steal a copy is your only choice. With puzzles and locks slowing you down, making it a Blockbuster night, is going to be harder than you thought.",
    difficulty: 3,
    durationMins: 60,
    minPlayers: 2,
    maxPlayers: 5,
    image: movieNightImg,
    type: 'on-site',
    priceInfo: '$30/Player'
  },
  {
    id: 'treasure-cove',
    title: 'Treasure Cove',
    tagline: 'Return the treasure and break the pirate curse.',
    description: "The member of your pirate crew stole treasure from a long-dead pirate's hoard, cursing your crew to be trapped on an island. You banded together to get rid of the thief, but you still need to undo what he did - return the treasure to the pirate's cave to free yourselves.",
    difficulty: 4,
    durationMins: 60,
    minPlayers: 3,
    maxPlayers: 8,
    image: treasureCoveImg,
    type: 'on-site',
    priceInfo: '$30/Player'
  },
  {
    id: 'rat-race',
    title: 'Rat Race',
    tagline: 'Escape the lab maze and save your job!',
    description: "You're rats in a lab, and you're being put to the test - escape the maze, or face.......being fired from your job. You have a rat family to support - escaping is the only option.",
    difficulty: 3,
    durationMins: 60,
    minPlayers: 3,
    maxPlayers: 8,
    image: ratRaceImg,
    type: 'on-site',
    priceInfo: '$30/Player'
  },
  {
    id: 'last-call',
    title: 'Last Call 2.0',
    tagline: 'Rob the bar, dodge the traps, and escape before last call!',
    description: "Your heist gang has been robbing bars throughout Sudbury over the last week, and on your last night in town you decided to rob Shooters. However, the owner of the bar caught on to your scheme and has set traps throughout the bar to catch you in the act! With all these unexpected obstacles, can your team still manage to escape?",
    difficulty: 4,
    durationMins: 60,
    minPlayers: 3,
    maxPlayers: 8,
    image: lastCallImg,
    type: 'on-site',
    priceInfo: '$30/Player'
  },
  {
    id: 'sterling-heist',
    title: 'The Sterling Heist',
    tagline: 'Crack the case from the comfort of your home.',
    description: "You’re a detective with the NYPD and it seems your partner has gotten in over his head. When things go wrong, he leaves you with nothing but a cryptic email and a locked package - can you string together the pieces and solve the case he was working on?",
    difficulty: 4,
    durationMins: 90,
    minPlayers: 1,
    maxPlayers: 4,
    image: sterlingHeistImg,
    type: 'at-home',
    priceInfo: '$40/Game'
  }
];

export const TIME_SLOTS = [
  '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '10:00 PM'
];
