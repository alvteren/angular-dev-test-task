import * as StateUtils from '@bp/utils/state';
import { ForecastHourly } from '@bp/weather-forecast/const';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateWithWeatherForecast, WeatherForecastState } from '../weather-forecast-state';
import { getWeatherForecastState } from './feature.selector';

export const getForecastHourlyState: MemoizedSelector<
	StateWithWeatherForecast,
	StateUtils.LoaderState<ForecastHourly[]>
> = createSelector(getWeatherForecastState, (state: WeatherForecastState) => state.hourly);

export const getForecastHourlyValue: MemoizedSelector<StateWithWeatherForecast, ForecastHourly[]> = createSelector(
	getForecastHourlyState,
	(state: StateUtils.LoaderState<ForecastHourly[]>) => StateUtils.loaderValueSelector(state)
);

export const getForecastHourlyLoading: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getForecastHourlyState,
	(state: StateUtils.LoaderState<ForecastHourly[]>) => StateUtils.loaderLoadingSelector(state)
);

export const getForecastHourlyError: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getForecastHourlyState,
	(state: StateUtils.LoaderState<ForecastHourly[]>) => StateUtils.loaderErrorSelector(state)
);

export const getForecastHourlySuccess: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getForecastHourlyState,
	(state: StateUtils.LoaderState<ForecastHourly[]>) => StateUtils.loaderSuccessSelector(state)
);
