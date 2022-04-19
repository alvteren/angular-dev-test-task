import { Injectable } from '@angular/core';
import { Coordinates, ForecastDaily, ForecastHourly, Geo } from '@bp/weather-forecast/const';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { WeatherForecastActions } from '../store/actions';
import { WeatherForecastSelectors } from '../store/selectors';
import { StateWithWeatherForecast } from '../store/weather-forecast-state';

@Injectable({ providedIn: 'root' })
export class WeatherForecastFacade {
	constructor(protected store: Store<StateWithWeatherForecast>) {}

	loadCoordinatesByLocationName(query: string): void {
		this.store.dispatch(new WeatherForecastActions.LoadCoordinatesByLocationName(query));
	}

	getCoordinates(): Observable<Coordinates[]> {
		return this.store.select(WeatherForecastSelectors.getCitiesValue);
	}

	getCoordinatesLoading(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getCitiesLoading);
	}

	getCoordinatesError(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getCitiesError);
	}

	getCoordinatesSuccess(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getCitiesSuccess);
	}

	loadForecastHourly(geo: Geo): void {
		this.store.dispatch(new WeatherForecastActions.LoadForecastHourly(geo));
	}

	getForecastHourly(): Observable<ForecastHourly[]> {
		return this.store.select(WeatherForecastSelectors.getForecastHourlyValue);
	}

	getForecastHourlyLoading(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getForecastHourlyLoading);
	}

	getForecastHourlyError(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getForecastHourlyError);
	}

	getForecastHourlySuccess(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getForecastHourlySuccess);
	}

	loadForecastDaily(geo: Geo): void {
		this.store.dispatch(new WeatherForecastActions.LoadForecastDaily(geo));
	}

	getForecastDaily(): Observable<ForecastDaily[]> {
		return this.store.select(WeatherForecastSelectors.getForecastDailyValue);
	}

	getForecastDailyLoading(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getForecastDailyLoading);
	}

	getForecastDailyError(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getForecastDailyError);
	}

	getForecastDailySuccess(): Observable<boolean> {
		return this.store.select(WeatherForecastSelectors.getForecastDailySuccess);
	}
}
