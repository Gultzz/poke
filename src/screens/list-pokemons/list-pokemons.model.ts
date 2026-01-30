export type ShortPokemon = {
  name: string;
  url: string;
};

export type DetailedPokemonAPI = {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  url: string;
};

export type DetailedPokemon = {
  id: number;
  name: string;
  types: string[];
  sprites: string;
  url: string;
};
