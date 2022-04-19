import * as StateUtils from '@bp/utils/state';
import { ForecastDaily, Geo } from '@bp/weather-forecast/const';
import { FORECAST_DAILY } from '../weather-forecast-state';

export const LOAD_FORECAST_DAILY = '[WeatherForecast] Load Forecast Daily';
export const LOAD_FORECAST_DAILY_SUCCESS = '[WeatherForecast] Load Forecast Daily Success';
export const LOAD_FORECAST_DAILY_FAIL = '[WeatherForecast] Load Forecast Daily Fail';

export class LoadForecastDaily extends StateUtils.LoaderLoadAction {
	readonly type = LOAD_FORECAST_DAILY;

	constructor(public payload: Geo) {
		super(FORECAST_DAILY);
	}
}

export class LoadForecastDailySuccess extends StateUtils.LoaderSuccessAction {
	readonly type = LOAD_FORECAST_DAILY_SUCCESS;

	constructor(public payload: ForecastDaily[]) {
		super(FORECAST_DAILY);
	}
}

export class LoadForecastDailyFail extends StateUtils.LoaderFailAction {
	readonly type = LOAD_FORECAST_DAILY_FAIL;

	constructor(public payload: any) {
		super(FORECAST_DAILY, payload);
	}
}

export class LoadForecastDailyReset extends StateUtils.LoaderResetAction {
	readonly type = LOAD_FORECAST_DAILY_FAIL;

	constructor() {
		super(FORECAST_DAILY);
	}
}
