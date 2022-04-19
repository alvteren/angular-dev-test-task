import * as StateUtils from '@bp/utils/state';
import { Coordinates } from '@bp/weather-forecast/const';
import { COORDINATES_BY_LOCATION_NAME } from '../weather-forecast-state';

export const LOAD_COORDINATES_BY_LOCATION_NAME = '[WeatherForecast] Load Coordinates By Location';
export const LOAD_COORDINATES_BY_LOCATION_NAME_SUCCESS = '[WeatherForecast] Load Coordinates By Location Success';
export const LOAD_COORDINATES_BY_LOCATION_NAME_FAIL = '[WeatherForecast] Load Coordinates By Location Fail';

export class LoadCoordinatesByLocationName extends StateUtils.LoaderLoadAction {
	readonly type = LOAD_COORDINATES_BY_LOCATION_NAME;

	constructor(public payload: string) {
		super(COORDINATES_BY_LOCATION_NAME);
	}
}

export class LoadCoordinatesByLocationNameSuccess extends StateUtils.LoaderSuccessAction {
	readonly type = LOAD_COORDINATES_BY_LOCATION_NAME_SUCCESS;

	constructor(public payload: Coordinates[]) {
		super(COORDINATES_BY_LOCATION_NAME);
	}
}

export class LoadCoordinatesByLocationNameFail extends StateUtils.LoaderFailAction {
	readonly type = LOAD_COORDINATES_BY_LOCATION_NAME_FAIL;

	constructor(public payload: any) {
		super(COORDINATES_BY_LOCATION_NAME, payload);
	}
}
