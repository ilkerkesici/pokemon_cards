import React, {useCallback} from 'react';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import useHomeHook from './useHomeHook';
import HeaderWithFlatList from 'components/Header/HeaderWithFlatlist';
import {PokemonCard} from 'types/models';
import {Text} from 'components/CoreComponents';

export default function Home() {
  const {i18n} = useTranslation();
  const {cards} = useHomeHook();

  const renderItem = useCallback(
    ({item}: {item: PokemonCard}) => <Text>{item.name}</Text>,
    [],
  );

  return (
    <ScreenContainer>
      <HeaderWithFlatList
        headerProps={{title: i18n.t('home.title')}}
        data={cards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </ScreenContainer>
  );
}

const keyExtractor = (item: PokemonCard) => item.id.toString();
