import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { StateWithWeatherForecast, WeatherForecastState, WEATHER_FORECAST_FEATURE } from '../weather-forecast-state';

export const getWeatherForecastState: MemoizedSelector<StateWithWeatherForecast, WeatherForecastState> =
	createFeatureSelector<WeatherForecastState>(WEATHER_FORECAST_FEATURE);
