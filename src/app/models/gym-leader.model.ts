export interface Pokemon {
  name: string;
  level: number;
}

export interface GymLeader {
  name: string;
  type: string;
  badge: string;
  location: string;
  typeColor: string;
  team: Pokemon[];
}