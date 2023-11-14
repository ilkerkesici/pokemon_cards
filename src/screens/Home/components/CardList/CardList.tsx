import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {PokemonCard} from 'types/models';
import useCardListHook from './useCardListHook';
import CardListItem from './CardListItem';

export default function CardList() {
  const {cards, onPressCard} = useCardListHook();

  const renderItem = useCallback(
    ({item}: {item: PokemonCard}) => (
      <CardListItem onPress={onPressCard} data={item} />
    ),
    [onPressCard],
  );

  return (
    <FlatList
      data={cards}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

const keyExtractor = (item: PokemonCard) => item.id.toString();
