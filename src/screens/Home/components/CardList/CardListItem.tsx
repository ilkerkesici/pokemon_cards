import {Block, Image, Text} from 'components/CoreComponents';
import {DEFAULT_SCREEN_HORIZONTAL_PADDING} from 'constants/design';
import React from 'react';
import {PokemonCard} from 'types/models';

interface Props {
  data: PokemonCard;
  onPress: (card: PokemonCard) => void;
}

export default function CardListItem({data, onPress}: Props) {
  const onPressItem = () => {
    onPress(data);
  };

  return (
    <Block fill marginBottom={DEFAULT_SCREEN_HORIZONTAL_PADDING}>
      <Block
        padding={14}
        alignItems="center"
        borderRadius={10}
        borderWidth={1}
        borderColor="neutral.400"
        onPress={onPressItem}>
        <Image
          width={150}
          height={240}
          source={{uri: data.images.large}}
          resizeMode="contain"
        />
        <Text>{data.name}</Text>
      </Block>
    </Block>
  );
}
