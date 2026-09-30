export interface Pokemon {
  name: string;
  level: number;
}

export interface GymLeader {
  name: string;
  town?: string;
  location?: string;
  specialty?: string;
  type?: string;
  badge: string;
  badgeUrl?: string;
  typeColor?: string;
  pokemonTeam?: string[];
  team?: Pokemon[];
}