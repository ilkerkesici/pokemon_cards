import {APIEndpointHelper} from 'helpers/ApiEndpointHelper';
import {useEffect, useState} from 'react';
import {PokemonCard} from 'types/models';

export default function useCardListHook() {
  const [cards, setCards] = useState<PokemonCard[]>([]);

  const getCards = async (page: number) => {
    const result = await APIEndpointHelper.getCards(page);
    if (result) {
      setCards(result);
    }
  };

  useEffect(() => {
    getCards(1);
  }, []);
  return {cards};
}
