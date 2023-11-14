import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from 'containers/Router/Router.type';
import {APIEndpointHelper} from 'helpers/ApiEndpointHelper';
import {useCallback, useEffect, useState} from 'react';
import {PokemonCard} from 'types/models';

export default function useCardListHook() {
  const [cards, setCards] = useState<PokemonCard[]>([]);

  const navigation = useNavigation<RootNavigation>();

  const getCards = async (page: number) => {
    const result = await APIEndpointHelper.getCards(page);
    if (result) {
      setCards(result);
    }
  };

  const onPressCard = useCallback(
    (card: PokemonCard) => {
      navigation.navigate('CARD_DETAIL', {card});
    },
    [navigation],
  );

  useEffect(() => {
    getCards(1);
  }, []);
  return {cards, onPressCard};
}
