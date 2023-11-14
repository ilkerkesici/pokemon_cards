/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useMemo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {PokemonCard} from 'types/models';
import useCardListHook from './useCardListHook';
import CardListItem from './CardListItem';
import {Block, Display, Spinner} from 'components/CoreComponents';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function CardList() {
  const {cards, extraCardFetching, onPressCard, onEndReached} =
    useCardListHook();

  const insets = useSafeAreaInsets();
  const spinnerContainePadding = {paddingBottom: insets.bottom};

  const renderItem = useCallback(
    ({item}: {item: PokemonCard}) => (
      <CardListItem onPress={onPressCard} data={item} />
    ),
    [onPressCard],
  );

  const List = useMemo(
    () => (
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        style={styles.flatlist}
      />
    ),
    [cards, renderItem],
  );

  return (
    <Block fill flex={1}>
      {List}
      <Display show={extraCardFetching}>
        <Block
          backgroundColor="custom-wb"
          style={[styles.spinnerContainer, spinnerContainePadding]}>
          <Spinner
            size={'small'}
            loading={extraCardFetching}
            fullScreen={false}
          />
        </Block>
      </Display>
    </Block>
  );
}

const keyExtractor = (item: PokemonCard) => item.id.toString();

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    alignSelf: 'stretch',
  },
  spinnerContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
