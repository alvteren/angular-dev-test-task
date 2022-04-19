import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordinates, ForecastDaily, ForecastHourly, ForecastMode, Geo } from '@bp/weather-forecast/const';
import { WeatherForecastActions, WeatherForecastApiService } from '@bp/weather-forecast/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigatedAction, ROUTER_NAVIGATED } from '@ngrx/router-store';
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

	updateRoutingByMode$: Observable<void> = createEffect(
		() =>
			this.actions$.pipe(
				ofType(WeatherForecastActions.SET_FORECAST_MODE),
				pluck('payload'),
				map((mode: ForecastMode) => {
					this.router.navigate([], {
						queryParams: { mode },
						queryParamsHandling: 'merge',
						relativeTo: this.activatedRoute,
					});
					return;
				})
			),
		{ dispatch: false }
	);

	restoreByRouting$: Observable<
		WeatherForecastActions.SetForecastMode | WeatherForecastActions.LoadCoordinatesByLocationName
	> = createEffect(() =>
		this.actions$.pipe(
			ofType(ROUTER_NAVIGATED),
			map((action: RouterNavigatedAction) => action.payload),
			distinctUntilChanged((prev, next) => prev.routerState.url !== next.routerState.url),
			// Disclaimer:
			// if it will be big app with different pages it needs add route checking
			// for test task the solution is okay. I think ;)
			pluck('routerState', 'root', 'queryParams'),
			concatMap((queryParams: Partial<Record<string, string>>) => {
				const actions = [];

				if (queryParams.mode && Object.values<string>(ForecastMode).includes(queryParams.mode)) {
					actions.push(new WeatherForecastActions.SetForecastMode(queryParams.mode as ForecastMode));
				}

				if (queryParams.query) {
					actions.push(new WeatherForecastActions.LoadCoordinatesByLocationName(queryParams.query));
				}

				return from(actions);
			})
		)
	);

	updateRoutingByQuery$: Observable<void> = createEffect(
		() =>
			this.actions$.pipe(
				ofType(WeatherForecastActions.LOAD_COORDINATES_BY_LOCATION_NAME),
				pluck('payload'),
				map((query: string) => {
					this.router.navigate([], {
						queryParams: { query },
						queryParamsHandling: 'merge',
						relativeTo: this.activatedRoute,
					});
					return;
				})
			),
		{ dispatch: false }
	);

	constructor(
		private actions$: Actions,
		private weatherForecastApiService: WeatherForecastApiService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}
}
