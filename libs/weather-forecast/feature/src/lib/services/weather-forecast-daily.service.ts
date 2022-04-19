import { Injectable } from '@angular/core';
import { ForecastDaily, Geo } from '@bp/weather-forecast/const';
import { WeatherForecastFacade } from '@bp/weather-forecast/data-access';

import { Observable, switchMap, tap, withLatestFrom } from 'rxjs';
import { WeatherForecastLocationService } from './weather-forecast-location.service';

@Injectable({ providedIn: 'root' })
export class WeatherForecastDailyService {
	constructor(
		protected weatherForecastFacade: WeatherForecastFacade,
		protected weatherForecastLocationService: WeatherForecastLocationService
	) {}

	loadForecast(geo: Geo): void {
		this.weatherForecastFacade.loadForecastDaily(geo);
	}

	getForecast(): Observable<ForecastDaily[]> {
		return this.weatherForecastFacade.getForecastDaily();
	}

	getForecastLoading(): Observable<boolean> {
		return this.weatherForecastFacade.getForecastDailyLoading();
	}

	getForecastError(): Observable<boolean> {
		return this.weatherForecastFacade.getForecastDailyError();
	}

	getForecastSuccess(): Observable<boolean> {
		return this.weatherForecastFacade.getForecastDailySuccess();
	}

	getForecastWithLoading(): Observable<ForecastDaily[]> {
		return this.weatherForecastLocationService.getCities().pipe(
			withLatestFrom(this.getForecastLoading(), this.getForecastError(), this.getForecastSuccess()),
			tap(([cities, loading, error, success]) => {
				if (!loading && !error && !success) {
					this.loadForecast(cities[0].geo);
				}
			}),
			switchMap(() => this.getForecast())
		);
	}
}
