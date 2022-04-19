import { ForecastMode } from '@bp/weather-forecast/const';
import { Action } from '@ngrx/store';

export const SET_FORECAST_MODE = '[WeatherForecast] Set Forecast mode';

export class SetForecastMode implements Action {
	readonly type = SET_FORECAST_MODE;
	constructor(public payload: ForecastMode) {}
}
