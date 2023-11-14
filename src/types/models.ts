export interface PokemonCardAttact {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}

interface CardMarketPrices {
  averageSellPrice: number;
  avg1: number;
  avg7: number;
  avg30: number;
  germanProLow: number;
  lowPrice: number;
  lowPriceExPlus: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
  reverseHoloLow: number;
  reverseHoloSell: number;
  reverseHoloTrend: number;
  suggestedPrice: number;
  trendPrice: number;
}

interface CardMarket {
  prices: CardMarketPrices;
  updatedAt: string;
  url: string;
}

interface PokemonCardImages {
  large: string;
  small: string;
}

export interface PokemonCard {
  artist: string;
  attacks: PokemonCardAttact[];
  cardMarket: CardMarket;
  convertedRetreatCost: number;
  evolvesFrom: string;
  flavorText: string;
  hp: string;
  id: string;
  images: PokemonCardImages;
  legalities: {unlimited: string};
  name: string;
  nationalPokedexNumbers: number[];
  number: string;
  rarity: string;
  resistances: {type: string; value: string}[];
  retreatCost: string[];
  superType: string;
  subTypes: string[];
}
