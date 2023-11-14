import React from 'react';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import useHomeHook from './useHomeHook';
import {Header} from 'components/Header/Header';

export default function Home() {
  const {i18n} = useTranslation();
  const {} = useHomeHook();

  return (
    <ScreenContainer safeAreaBottom>
      <Header title={i18n.t('home.title')} />
    </ScreenContainer>
  );
}
