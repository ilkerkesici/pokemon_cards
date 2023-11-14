// import {BASE_URL} from '@env';
import axios, {AxiosRequestConfig} from 'axios';
import {SessionHelper} from './SessionHelper';
import NetworkError from './errors/NetworkError';
import {i18n} from 'constants/i18n';
// import {BASE_URL} from '@env';
import MockApi from './MockApi';

const BASE_URL = 'https://api.pokemontcg.io'; // This endpoint should be in the .env file. However, I put it here because of the ease the running the project.

class ApiHelper {
  private getOptions = (): AxiosRequestConfig => {
    const headerParameters: {
      'Accept-Language': string;
      Authorization?: string;
    } = {
      'Accept-Language': i18n.locale,
    };
    if (SessionHelper.token) {
      headerParameters.Authorization = `Bearer ${SessionHelper.token}`;
    }

    return {headers: headerParameters};
  };

  async get<T>(endpoint: string): Promise<T | NetworkError> {
    try {
      const result = MockApi.getResult(endpoint);

      if (result) {
        return result;
      }
      const options = this.getOptions();
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        ...options,
      });
      MockApi.setResult(endpoint, response.data);
      return response.data;
    } catch (error) {
      return new NetworkError('Server Error');
    }
  }

  async post<T>(endpoint: string, body: any): Promise<T | NetworkError> {
    try {
      const response = await axios.post(
        `${BASE_URL}${endpoint}`,
        body,
        this.getOptions(),
      );
      return response.data;
    } catch (error) {
      return new NetworkError('Server Error');
    }
  }

  async put<T>(endpoint: string, body: any): Promise<T | NetworkError> {
    try {
      const response = await axios.put(
        `${BASE_URL}${endpoint}`,
        body,
        this.getOptions(),
      );

      return response.data;
    } catch (error) {
      return new NetworkError('Server Error');
    }
  }

  async patch<T>(endpoint: string, body: any): Promise<T | NetworkError> {
    try {
      const response = await axios.patch(
        `${BASE_URL}${endpoint}`,
        body,
        this.getOptions(),
      );

      return response.data;
    } catch (error) {
      return new NetworkError('Server Error');
    }
  }

  async delete<T>(endpoint: string): Promise<T | NetworkError> {
    try {
      const response = await axios.delete(
        `${BASE_URL}${endpoint}`,
        this.getOptions(),
      );
      return response.data;
    } catch (error) {
      return new NetworkError('Server Error');
    }
  }
}

export const APIHelper = new ApiHelper();
