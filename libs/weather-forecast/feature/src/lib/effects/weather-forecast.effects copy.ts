import { Injectable } from '@angular/core';
import { Coordinates, ForecastDaily, ForecastHourly, Geo } from '@bp/weather-forecast/const';
import { WeatherForecastActions, WeatherForecastApiService } from '@bp/weather-forecast/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import { catchError, concatMap, distinctUntilChanged, map, pluck, switchMap } from 'rxjs/operators';

@Injectable()
export class WeatherForecastEffects {
	loadCoordinatesByLocationName$: Observable<
		| WeatherForecastActions.LoadCoordinatesByLocationNameSuccess
		| WeatherForecastActions.LoadCoordinatesByLocationNameFail
		| WeatherForecastActions.LoadForecastDailyReset
		| WeatherForecastActions.LoadForecastHourlyReset
	> = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherForecastActions.LOAD_COORDINATES_BY_LOCATION_NAME),
			pluck('payload'),
			distinctUntilChanged(),
			switchMap((query: string) => {
				return this.weatherForecastApiService.loadCoordinatesByLocationName(query).pipe(
					concatMap((cities: Coordinates[]) => {
						return from([
							new WeatherForecastActions.LoadForecastDailyReset(),
							new WeatherForecastActions.LoadForecastHourlyReset(),
							new WeatherForecastActions.LoadCoordinatesByLocationNameSuccess(cities),
						]);
					}),
					catchError((e: unknown) => of(new WeatherForecastActions.LoadCoordinatesByLocationNameFail(e)))
				);
			})
		)
	);

	loadForecastDaily$: Observable<
		WeatherForecastActions.LoadForecastDailySuccess | WeatherForecastActions.LoadForecastDailyFail
	> = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherForecastActions.LOAD_FORECAST_DAILY),
			pluck('payload'),
			switchMap((geo: Geo) => {
				return this.weatherForecastApiService.loadForecastDaily(geo).pipe(
					map((forecast: ForecastDaily[]) => {
						return new WeatherForecastActions.LoadForecastDailySuccess(forecast);
					}),
					catchError((e: unknown) => of(new WeatherForecastActions.LoadForecastDailyFail(e)))
				);
			})
		)
	);

	loadForecastHourly$: Observable<
		WeatherForecastActions.LoadForecastHourlySuccess | WeatherForecastActions.LoadForecastHourlyFail
	> = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherForecastActions.LOAD_FORECAST_HOURLY),
			pluck('payload'),
			switchMap((geo: Geo) => {
				return this.weatherForecastApiService.loadForecastHourly(geo).pipe(
					map((forecast: ForecastHourly[]) => {
						return new WeatherForecastActions.LoadForecastHourlySuccess(forecast);
					}),
					catchError((e: unknown) => of(new WeatherForecastActions.LoadForecastHourlyFail(e)))
				);
			})
		)
	);

	constructor(private actions$: Actions, private weatherForecastApiService: WeatherForecastApiService) {}
}
