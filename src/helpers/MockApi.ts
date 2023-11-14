import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageType} from 'constants/localstorage';

class MockApiController {
  cachedData: Record<string, any> = {};

  private mockedEndpoints = ['/cards/'];

  async init() {
    const result = await AsyncStorage.getItem(LocalStorageType.MOCKED_API);
    if (result) {
      try {
        this.cachedData = JSON.parse(result);
      } catch (_) {}
    }
  }

  private getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  setResult(endpoint: string, result: any) {
    this.cachedData = {
      ...this.cachedData,
      [endpoint]: {result, created_at: this.getTimestampInSeconds()},
    };
    if (!this.mockedEndpoints.includes(endpoint)) {
      return;
    }
    AsyncStorage.setItem(
      LocalStorageType.MOCKED_API,
      JSON.stringify(this.cachedData),
    );
  }

  getResult(endponit: string, cacheTimeInSecond = 60 * 10) {
    const data = this.cachedData[endponit];
    if (
      !data ||
      this.getTimestampInSeconds() - data.created_at > cacheTimeInSecond
    ) {
      return null;
    }

    return data.result;
  }
}

const MockApi = new MockApiController();

export default MockApi;
