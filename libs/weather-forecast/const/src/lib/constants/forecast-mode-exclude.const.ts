import { ForecastMode } from '../enums';

export const forecastModeExlude = {
	[ForecastMode.Daily]: 'current,minutely,hourly,alerts',
	[ForecastMode.Hourly]: 'current,minutely,daily,alerts',
};
