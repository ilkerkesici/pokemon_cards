import {Block, Text} from 'components/CoreComponents';
import useTranslation from 'helpers/hooks/useTranslation';
import React from 'react';
import {PokemonCardAttact} from 'types/models';

interface Props {
  attact: PokemonCardAttact;
}

export default function AttactListItem({attact}: Props) {
  const {i18n} = useTranslation();
  return (
    <Block fill marginTop={30}>
      <Block fillInRow>
        <Text marginBottom={5} variant="body" size="md" fontWeight="600">
          {attact.name}
        </Text>
        <Text variant="caption1" size="lg">
          {attact.text}
        </Text>
      </Block>
      <Block flexDirection="row" fill marginTop={10}>
        <Text marginBottom={5} variant="body" size="sm">
          {i18n.t('card_detail.damage')}
        </Text>
        <Block
          fill
          width={30}
          height={30}
          borderRadius={15}
          marginLeft={10}
          backgroundColor="red.300">
          <Text variant="body" size="sm" fontWeight="500" color="white">
            {attact.damage}
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
