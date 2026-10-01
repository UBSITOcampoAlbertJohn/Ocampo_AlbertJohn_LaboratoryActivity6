import { Injectable, signal, computed } from '@angular/core';
import { Pokemon, PokemartItem, CartItem } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Kanto Region Pokémon
  readonly kantoPokemon: Pokemon[] = [
    { name: 'Pikachu', type: 'Electric', heldItem: 'Light Ball', description: 'Mouse Pokémon that stores electricity in its cheeks.' },
    { name: 'Charizard', type: 'Fire/Flying', heldItem: 'Charcoal', description: 'Spits fire that is hot enough to melt boulders.' },
    { name: 'Blastoise', type: 'Water', heldItem: 'Mystic Water', description: 'Crushes its foe under its heavy body to cause fainting.' },
    { name: 'Venusaur', type: 'Grass/Poison', heldItem: 'Miracle Seed', description: 'The plant blooms when it absorbs solar energy.' },
    { name: 'Gengar', type: 'Ghost/Poison', heldItem: 'Spell Tag', description: 'Hides in shadows to absorb heat from surroundings.' },
    { name: 'Dragonite', type: 'Dragon/Flying', heldItem: 'Dragon Scale', description: 'It is said that this Pokémon lives somewhere in the ocean.' }
  ];

  // Johto Region Pokémon
  readonly johtoPokemon: Pokemon[] = [
    { name: 'Typhlosion', type: 'Fire', heldItem: 'Charcoal', description: 'Has a secret devastating move that creates huge explosions.' },
    { name: 'Feraligatr', type: 'Water', heldItem: 'Mystic Water', description: 'When it bites with its massive jaws, it shakes its head wildly.' },
    { name: 'Meganium', type: 'Grass', heldItem: 'Miracle Seed', description: 'The aroma that rises from its petals contains something that calms.' },
    { name: 'Tyranitar', type: 'Rock/Dark', heldItem: 'Hard Stone', description: 'Extremely strong, it can change the landscape easily.' },
    { name: 'Ampharos', type: 'Electric', heldItem: 'Magnet', description: 'The bright light on its tail can be seen from far away.' },
    { name: 'Scizor', type: 'Bug/Steel', heldItem: 'Metal Coat', description: 'It has a body with steel-like hardness.' }
  ];

  // Hoenn Region Pokémon
  readonly hoennPokemon: Pokemon[] = [
    { name: 'Sceptile', type: 'Grass', heldItem: 'Miracle Seed', description: 'The leaves growing out of its body are as sharp as swords.' },
    { name: 'Blaziken', type: 'Fire/Fighting', heldItem: 'Black Belt', description: 'Can clear a 30-story building in a single leap.' },
    { name: 'Swampert', type: 'Water/Ground', heldItem: 'Soft Sand', description: 'Can drag a boulder weighing more than a ton.' },
    { name: 'Gardevoir', type: 'Psychic/Fairy', heldItem: 'Twisted Spoon', description: 'Has the power to predict the future and protect its Trainer.' },
    { name: 'Metagross', type: 'Steel/Psychic', heldItem: 'Metal Coat', description: 'It has four brains combined into a supercomputer.' },
    { name: 'Rayquaza', type: 'Dragon/Flying', heldItem: 'Life Orb', description: 'Flies endlessly through the ozone layer.' }
  ];

  // 10 PokéMart Items
  readonly martItems: PokemartItem[] = [
    { id: 1, name: 'Poké Ball', price: 200, description: 'Standard ball for catching wild Pokémon.' },
    { id: 2, name: 'Great Ball', price: 600, description: 'Good catch rate ball.' },
    { id: 3, name: 'Ultra Ball', price: 1200, description: 'Ultra-high catch rate ball.' },
    { id: 4, name: 'Potion', price: 300, description: 'Restores 20 HP.' },
    { id: 5, name: 'Super Potion', price: 700, description: 'Restores 60 HP.' },
    { id: 6, name: 'Hyper Potion', price: 1500, description: 'Restores 120 HP.' },
    { id: 7, name: 'Revive', price: 1500, description: 'Revives a fainted Pokémon with half HP.' },
    { id: 8, name: 'Antidote', price: 100, description: 'Heals poison.' },
    { id: 9, name: 'Paralyze Heal', price: 200, description: 'Heals paralysis.' },
    { id: 10, name: 'Escape Rope', price: 550, description: 'Escape immediately from caves.' }
  ];

  // Cart State Signal
  cart = signal<CartItem[]>([]);

  // Computed Derived State Signals
  totalCartAmount = computed(() =>
    this.cart().reduce((sum: number, item: CartItem) => sum + item.item.price * item.quantity, 0)
  );

  totalCartCount = computed(() =>
    this.cart().reduce((count: number, item: CartItem) => count + item.quantity, 0)
  );

  // Cart Management Methods
  addToCart(item: PokemartItem) {
    this.cart.update((currentCart: CartItem[]) => {
      const existing = currentCart.find((i: CartItem) => i.item.id === item.id);
      if (existing) {
        return currentCart.map((i: CartItem) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...currentCart, { item, quantity: 1 }];
    });
  }

  removeFromCart(itemId: number) {
    this.cart.update((currentCart: CartItem[]) =>
      currentCart.filter((i: CartItem) => i.item.id !== itemId)
    );
  }

  clearCart() {
    this.cart.set([]);
  }
}