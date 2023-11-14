import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageType} from 'constants/localstorage';
import {setPokemonCardRecords} from 'reduxStore/actions/pokemonCardActions';
import {useAppDispatch, useAppSelector} from 'reduxStore/hooks';
import {getSavedPokemonCardRecords} from 'reduxStore/selectors/pokemonCardSelector';

export default function usePokemonCardRecords() {
  const records = useAppSelector(state => getSavedPokemonCardRecords(state));
  const dispatch = useAppDispatch();

  const init = async () => {
    const savedResults = await AsyncStorage.getItem(
      LocalStorageType.CARD_RECORDS,
    );
    if (savedResults) {
      try {
        const parsedRecords = JSON.parse(savedResults);
        dispatch(setPokemonCardRecords(parsedRecords));
      } catch (_) {}
    } else {
      AsyncStorage.setItem(LocalStorageType.CARD_RECORDS, JSON.stringify([]));
    }
  };

  const setRecords = (newRecords: string[]) => {
    dispatch(setPokemonCardRecords(newRecords));
    AsyncStorage.setItem(
      LocalStorageType.CARD_RECORDS,
      JSON.stringify(newRecords),
    );
  };

  const isCardSaved = (cardId: string) => {
    return records.includes(cardId);
  };

  const saveCard = (cardId: string) => {
    if (isCardSaved(cardId)) {
      return;
    }
    const newRecords = [...records, cardId];
    setRecords(newRecords);
  };

  const deleteCard = (cardId: string) => {
    if (!isCardSaved(cardId)) {
      return;
    }
    const indexOfItem = records.findIndex(item => item === cardId);
    const newRecords = [...records];
    newRecords.splice(indexOfItem, 1);
    dispatch(setPokemonCardRecords(newRecords));
    setRecords(newRecords);
  };

  return {init, isCardSaved, saveCard, deleteCard};
}
