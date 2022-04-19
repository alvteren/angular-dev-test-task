import { ForecastMode } from '@bp/weather-forecast/const';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateWithWeatherForecast, WeatherForecastState } from '../weather-forecast-state';
import { getWeatherForecastState } from './feature.selector';

export const getSwitcherState: MemoizedSelector<StateWithWeatherForecast, ForecastMode> = createSelector(
	getWeatherForecastState,
	(state: WeatherForecastState) => state.forecastMode
);
