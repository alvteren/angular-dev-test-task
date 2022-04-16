import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Ticket } from '@product/const';
import { StateUtils } from '@spartacus/core';
import { StateWithWeatherForecast, WeatherForecastState } from '../weather-forecast-state';
import { getWeatherForecastState } from './feature.selector';

export const getTicketState: MemoizedSelector<
	StateWithWeatherForecast,
	StateUtils.LoaderState<Ticket>
> = createSelector(getWeatherForecastState, (state: WeatherForecastState) => state.ticket);

export const getTicketLoading: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getTicketState,
	(state: StateUtils.LoaderState<Ticket>) => StateUtils.loaderLoadingSelector(state)
);

export const getTicketError: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getTicketState,
	(state: StateUtils.LoaderState<Ticket>) => StateUtils.loaderErrorSelector(state)
);

export const getTicketSuccess: MemoizedSelector<StateWithWeatherForecast, boolean> = createSelector(
	getTicketState,
	(state: StateUtils.LoaderState<Ticket>) => StateUtils.loaderSuccessSelector(state)
);
