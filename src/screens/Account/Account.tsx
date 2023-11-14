import HeaderWithScrollView from 'components/Header/HeaderWithScrollView';
import ScreenContainer from 'containers/ScreenContainer/ScreenContainer';
import useTranslation from 'helpers/hooks/useTranslation';
import React from 'react';

export default function Account() {
  const {i18n} = useTranslation();
  return (
    <ScreenContainer>
      <HeaderWithScrollView
        headerProps={{title: i18n.t('account.title'), back: true}}
      />
    </ScreenContainer>
  );
}
