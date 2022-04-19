import * as StateUtils from '@bp/utils/state';
import { Coordinates, ForecastDaily, ForecastHourly, ForecastMode } from '@bp/weather-forecast/const';

export const WEATHER_FORECAST_FEATURE = 'WeatherForecast';

export const COORDINATES_BY_LOCATION_NAME = '[WeatherForecast] Coordinates By Location Name';
export const FORECAST_DAILY = '[WeatherForecast] Forecast Daily';
export const FORECAST_HOURLY = '[WeatherForecast] Forecast Hourly';

export interface WeatherForecastState {
	hourly: StateUtils.LoaderState<ForecastHourly[]>;
	daily: StateUtils.LoaderState<ForecastDaily[]>;
	cities: StateUtils.LoaderState<Coordinates[]>;
	forecastMode: ForecastMode;
}

export interface StateWithWeatherForecast {
	[WEATHER_FORECAST_FEATURE]: WeatherForecastState;
}
