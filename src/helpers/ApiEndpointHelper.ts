import {PokemonCard} from 'types/models';
import {APIHelper} from './ApiHelper';
import NetworkError from './errors/NetworkError';

class ApiEndpointHelper {
  getCards = async (page: number, pageSize = 10) => {
    const result = await APIHelper.get<{data: PokemonCard[]}>(
      `/v2/cards?page=${page}&pageSize=${pageSize}`,
    );
    if (!result || result instanceof NetworkError) {
      return;
    }

    return result.data;
  };
}

export const APIEndpointHelper = new ApiEndpointHelper();
