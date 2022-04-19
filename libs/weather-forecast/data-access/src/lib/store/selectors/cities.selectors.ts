import * as StateUtils from '@bp/utils/state';
import { Coordinates } from '@bp/weather-forecast/const';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateWithWeatherForecast, WeatherForecastState } from '../weather-forecast-state';
import { getWeatherForecastState } from './feature.selector';

export const getCitiesState: MemoizedSelector<
	StateWithWeatherForecast,
	StateUtils.LoaderState<Coordinates[]>
> = createSelector(getWeatherForecastState, (state: WeatherForecastState) => state.cities);

export const getCitiesValue: MemoizedSelector<StateWithWeatherForecast, Coordinates[]> = createSelector(
	getCitiesState,
	(state: StateUtils.LoaderState<Coordinates[]>) => StateUtils.loaderValueSelector(state)
);

export const getCitiesLoading: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getCitiesState,
	(state: StateUtils.LoaderState<Coordinates[]>) => StateUtils.loaderLoadingSelector(state)
);

export const getCitiesError: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getCitiesState,
	(state: StateUtils.LoaderState<Coordinates[]>) => StateUtils.loaderErrorSelector(state)
);

export const getCitiesSuccess: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getCitiesState,
	(state: StateUtils.LoaderState<Coordinates[]>) => StateUtils.loaderSuccessSelector(state)
);
