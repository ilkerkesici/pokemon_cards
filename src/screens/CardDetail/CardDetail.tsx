import HeaderWithScrollView from 'components/Header/HeaderWithScrollView';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import React from 'react';
import {CardDetailPageProps} from './CardDetail.type';
import useCardDetailHook from './useCardDetailHook';
import {
  Block,
  Button,
  Display,
  Image,
  Spinner,
} from 'components/CoreComponents';
import Attacts from './components/Attacts/Attacts';
import {i18n} from 'constants/i18n';

export default function CardDetail(props: CardDetailPageProps) {
  const {cardDetail, loading, isCardSaved, onPressButton} =
    useCardDetailHook(props);
  const {card} = props.route.params;
  const isTheCardSaved = isCardSaved(card.id);

  return (
    <ScreenContainer safeAreaBottom>
      <HeaderWithScrollView headerProps={{title: card.name, back: true}}>
        <Display show={cardDetail}>
          <Block fill>
            <Image
              width={300}
              height={500}
              source={{uri: cardDetail?.images.large}}
              resizeMode="contain"
            />
          </Block>
          <Attacts attacts={cardDetail?.attacks} />
        </Display>
      </HeaderWithScrollView>
      <Block fill padding={20}>
        <Button
          text={i18n.t(
            isTheCardSaved ? 'card_detail.remove' : 'card_detail.save',
          )}
          onPress={onPressButton}
          type={'filled'}
        />
      </Block>
      <Spinner loading={loading} />
    </ScreenContainer>
  );
}
