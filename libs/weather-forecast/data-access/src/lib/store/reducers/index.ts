import { InjectionToken, Provider } from '@angular/core';
import * as StateUtils from '@bp/utils/state';
import { ActionReducerMap } from '@ngrx/store';
import {
	COORDINATES_BY_LOCATION_NAME,
	FORECAST_DAILY,
	FORECAST_HOURLY,
	WeatherForecastState,
} from '../weather-forecast-state';
import { reducer as forecastModeReducer } from './switcher.reducer';

export type WeatherForecastReducers = WeatherForecastState;

export function getReducers(): ActionReducerMap<WeatherForecastReducers, any> {
	return {
		cities: StateUtils.loaderReducer(COORDINATES_BY_LOCATION_NAME),
		daily: StateUtils.loaderReducer(FORECAST_DAILY),
		hourly: StateUtils.loaderReducer(FORECAST_HOURLY),
		forecastMode: forecastModeReducer,
	};
}

export const reducerToken: InjectionToken<ActionReducerMap<WeatherForecastReducers>> = new InjectionToken<
	ActionReducerMap<WeatherForecastReducers>
>('WeatherForecastReducers');

export const reducerProvider: Provider = {
	provide: reducerToken,
	useFactory: getReducers,
};
