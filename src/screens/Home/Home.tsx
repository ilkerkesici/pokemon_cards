import React, {useMemo} from 'react';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import useHomeHook from './useHomeHook';
import {Header} from 'components/Header/Header';
import CardList from './components/CardList/CardList';

export default function Home() {
  const {i18n} = useTranslation();
  const {} = useHomeHook();

  const MemorizedCardList = useMemo(() => <CardList />, []);

  return (
    <ScreenContainer>
      <Header title={i18n.t('home.title')} />
      {MemorizedCardList}
    </ScreenContainer>
  );
}
