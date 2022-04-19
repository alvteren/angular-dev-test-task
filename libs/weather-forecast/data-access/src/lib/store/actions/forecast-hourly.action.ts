import * as StateUtils from '@bp/utils/state';
import { ForecastHourly, Geo } from '@bp/weather-forecast/const';
import { FORECAST_HOURLY } from '../weather-forecast-state';

export const LOAD_FORECAST_HOURLY = '[WeatherForecast] Load Forecast Hourly';
export const LOAD_FORECAST_HOURLY_SUCCESS = '[WeatherForecast] Load Forecast Hourly Success';
export const LOAD_FORECAST_HOURLY_FAIL = '[WeatherForecast] Load Forecast Hourly Fail';

export class LoadForecastHourly extends StateUtils.LoaderLoadAction {
	readonly type = LOAD_FORECAST_HOURLY;

	constructor(public payload: Geo) {
		super(FORECAST_HOURLY);
	}
}

export class LoadForecastHourlySuccess extends StateUtils.LoaderSuccessAction {
	readonly type = LOAD_FORECAST_HOURLY_SUCCESS;

	constructor(public payload: ForecastHourly[]) {
		super(FORECAST_HOURLY);
	}
}

export class LoadForecastHourlyFail extends StateUtils.LoaderFailAction {
	readonly type = LOAD_FORECAST_HOURLY_FAIL;

	constructor(public payload: any) {
		super(FORECAST_HOURLY, payload);
	}
}

export class LoadForecastHourlyReset extends StateUtils.LoaderResetAction {
	readonly type = LOAD_FORECAST_HOURLY_FAIL;

	constructor() {
		super(FORECAST_HOURLY);
	}
}
