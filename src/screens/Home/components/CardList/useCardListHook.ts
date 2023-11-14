import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from 'containers/Router/Router.type';
import {APIEndpointHelper} from 'helpers/ApiEndpointHelper';
import {useCallback, useEffect, useState} from 'react';
import {PokemonCard} from 'types/models';

const PAGE_SIZE = 10;

export default function useCardListHook() {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endReached, setEndReached] = useState(false); // If true, that means all cards have been fetched.
  const [extraCardFetching, setExtraCardFetching] = useState(false);

  const navigation = useNavigation<RootNavigation>();

  const getCards = async (page: number) => {
    const isFirstPage = page === 1;
    if (!isFirstPage) {
      setExtraCardFetching(true);
    }
    const result = await APIEndpointHelper.getCards(page, PAGE_SIZE);
    if (result) {
      const {data, count} = result;
      setCards(isFirstPage ? data : currentCards => [...currentCards, ...data]);
      if (count < PAGE_SIZE) {
        setEndReached(true);
      }
    }
    setExtraCardFetching(false);
  };

  const onEndReached = () => {
    if (endReached && extraCardFetching) {
      return;
    }
    getCards(currentPage + 1);
    setCurrentPage(state => state + 1);
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
  return {cards, extraCardFetching, onPressCard, onEndReached};
}
