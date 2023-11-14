import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {PokemonCard} from 'types/models';
import useCardListHook from './useCardListHook';
import {Text} from 'components/CoreComponents';

export default function CardList() {
  const {cards} = useCardListHook();

  const renderItem = useCallback(
    ({item}: {item: PokemonCard}) => <Text>{item.name}</Text>,
    [],
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
