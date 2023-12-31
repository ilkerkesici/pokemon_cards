/* eslint-disable react-hooks/exhaustive-deps */
import {CommonActions, useNavigation} from '@react-navigation/native';
import {RootNavigation} from 'containers/Router/Router.type';
import MockApi from 'helpers/MockApi';
import usePokemonCardRecords from 'helpers/hooks/usePokemonCardRecords';
import {useTheme} from 'helpers/hooks/useThemeColor';
import useTranslation from 'helpers/hooks/useTranslation';
import {useEffect} from 'react';

export default function useSplashHook() {
  const navigation = useNavigation<RootNavigation>();

  const {getLocalSelection} = useTheme();
  const {initTranslation} = useTranslation();
  const {init: initPokemonCardRecords} = usePokemonCardRecords();

  const init = async () => {
    await getLocalSelection();
    await initTranslation();
    await MockApi.init();
    await initPokemonCardRecords();
    const action = CommonActions.reset({
      index: 0,
      routes: [{name: 'HOME'}],
    });
    navigation.dispatch(action);
  };

  useEffect(() => {
    init();
  }, []);

  return {};
}
