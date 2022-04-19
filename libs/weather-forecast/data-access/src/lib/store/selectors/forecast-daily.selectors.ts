import * as StateUtils from '@bp/utils/state';
import { ForecastDaily } from '@bp/weather-forecast/const';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateWithWeatherForecast, WeatherForecastState } from '../weather-forecast-state';
import { getWeatherForecastState } from './feature.selector';

export const getForecastDailyState: MemoizedSelector<
	StateWithWeatherForecast,
	StateUtils.LoaderState<ForecastDaily[]>
> = createSelector(getWeatherForecastState, (state: WeatherForecastState) => state.daily);

export const getForecastDailyValue: MemoizedSelector<StateWithWeatherForecast, ForecastDaily[]> = createSelector(
	getForecastDailyState,
	(state: StateUtils.LoaderState<ForecastDaily[]>) => StateUtils.loaderValueSelector(state)
);

export const getForecastDailyLoading: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getForecastDailyState,
	(state: StateUtils.LoaderState<ForecastDaily[]>) => StateUtils.loaderLoadingSelector(state)
);

export const getForecastDailyError: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getForecastDailyState,
	(state: StateUtils.LoaderState<ForecastDaily[]>) => StateUtils.loaderErrorSelector(state)
);

export const getForecastDailySuccess: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getForecastDailyState,
	(state: StateUtils.LoaderState<ForecastDaily[]>) => StateUtils.loaderSuccessSelector(state)
);
