import HeaderWithScrollView from 'components/Header/HeaderWithScrollView';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import React from 'react';
import {CardDetailPageProps} from './CardDetail.type';
import useCardDetailHook from './useCardDetailHook';
import {Block, Display, Image, Spinner} from 'components/CoreComponents';

export default function CardDetail(props: CardDetailPageProps) {
  const {i18n} = useTranslation();
  const {cardDetail, loading} = useCardDetailHook(props);
  const {card} = props.route.params;

  return (
    <ScreenContainer>
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
        </Display>
      </HeaderWithScrollView>
      <Spinner loading={loading} />
    </ScreenContainer>
  );
}
