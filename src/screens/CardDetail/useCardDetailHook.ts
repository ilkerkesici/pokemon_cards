/* eslint-disable react-hooks/exhaustive-deps */
import {APIEndpointHelper} from 'helpers/ApiEndpointHelper';
import {CardDetailPageProps} from './CardDetail.type';
import {useEffect, useState} from 'react';
import {PokemonCard} from 'types/models';

export default function useCardDetailHook({route}: CardDetailPageProps) {
  const {card} = route.params;
  const [cardDetail, setCardDetail] = useState<PokemonCard | null>(null);
  const [loading, setLoading] = useState(false);

  const getCardDetail = async () => {
    setLoading(true);
    const result = await APIEndpointHelper.getCard(card.id);
    if (result) {
      setCardDetail(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCardDetail();
  }, []);
  return {cardDetail, loading};
}
