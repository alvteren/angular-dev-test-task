import { ForecastMode } from '@bp/weather-forecast/const';
import { WeatherForecastActions } from '../actions';

export const initialState: ForecastMode = undefined;

export function reducer(state = initialState, action: WeatherForecastActions.SetForecastMode): ForecastMode {
	switch (action.type) {
		case WeatherForecastActions.SET_FORECAST_MODE: {
			return action.payload;
		}

		default: {
			return state;
		}
	}
}
