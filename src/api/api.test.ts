import api from './api';
import fakeRawWeatherData from './fakeRawWeatherData.json';
import fakeWeatherData from './fakeWeatherData.json';

describe('api.getWeather', () => {
  it('should get data when searching a valid city', async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => fakeRawWeatherData,
    });

    const data = await api.getWeather('Taipei', 'metric');

    expect(window.fetch).toBeCalledTimes(1);

    expect(data).toStrictEqual(fakeWeatherData);
  });

  it('it should return error when city not found', async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => ({ cod: '404', message: 'city not found' }),
    });

    const data = await api.getWeather('XXX', 'metric');

    expect(window.fetch).toBeCalledTimes(1);

    expect(data).toStrictEqual({ type: 'error', error: 'city not found' });
  });
});

export {};
