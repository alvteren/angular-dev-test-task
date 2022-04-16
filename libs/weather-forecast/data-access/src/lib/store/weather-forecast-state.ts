import { StateUtils } from '@bp/utils/state';

export const WEATHER_FORECAST_FEATURE = 'WeatheForecast';

export const UNIT_PRICE = '[WeatheForecast] Unit Prices';

export interface WeatherForecastState {
	hourly: StateUtils.LoaderState<ProductUnitPrice[]>;
	daily: StateUtils.LoaderState<ProductUnitPrice[]>;
}

export interface StateWithWeatherForecast {
	[WEATHER_FORECAST_FEATURE]: WeatherForecastState;
}
