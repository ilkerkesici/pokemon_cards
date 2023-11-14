import {Block, Text} from 'components/CoreComponents';
import {DEFAULT_SCREEN_HORIZONTAL_PADDING} from 'constants/design';
import {i18n} from 'constants/i18n';
import React from 'react';
import {PokemonCardAttact} from 'types/models';
import AttactListItem from './AttactListItem';

interface Props {
  attacts?: PokemonCardAttact[];
}

export default function Attacts({attacts}: Props) {
  if (!attacts || attacts.length === 0) {
    return <></>;
  }
  return (
    <Block
      fill
      alignItems="flex-start"
      paddingHorizontal={DEFAULT_SCREEN_HORIZONTAL_PADDING}>
      <Text variant="headline" fontWeight="700" size="lg">
        {i18n.t('card_detail.attacts')}
      </Text>
      {attacts.map((item, index) => (
        <AttactListItem attact={item} key={`${item.name}_${index}`} />
      ))}
    </Block>
  );
}
