import {RouteProp} from '@react-navigation/native';
import HeaderWithScrollView from 'components/Header/HeaderWithScrollView';
import {RootStackParamList} from 'containers/Router/Router.type';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import React from 'react';

type StackRouteProp = RouteProp<RootStackParamList, 'CARD_DETAIL'>;

interface Props {
  route: StackRouteProp;
}

export default function CardDetail({route}: Props) {
  const {i18n} = useTranslation();

  const {card} = route.params;

  return (
    <ScreenContainer>
      <HeaderWithScrollView headerProps={{title: card.name, back: true}} />
    </ScreenContainer>
  );
}
