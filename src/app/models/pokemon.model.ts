export interface Pokemon {
  name: string;
  type: string;
  heldItem: string;
  description: string;
}

export interface PokemartItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface CartItem {
  item: PokemartItem;
  quantity: number;
}