import { Injectable } from '@angular/core';
import { ForecastHourly, Geo } from '@bp/weather-forecast/const';
import { WeatherForecastFacade } from '@bp/weather-forecast/data-access';

import { Observable } from 'rxjs';
import { WeatherForecastDailyService } from './weather-forecast-daily.service';
import { WeatherForecastLocationService } from './weather-forecast-location.service';

@Injectable({ providedIn: 'root' })
export class WeatherForecastHourlyService extends WeatherForecastDailyService {
	constructor(
		protected weatherForecastFacade: WeatherForecastFacade,
		protected weatherForecastLocationService: WeatherForecastLocationService
	) {
		super(weatherForecastFacade, weatherForecastLocationService);
	}

	loadForecast(geo: Geo): void {
		this.weatherForecastFacade.loadForecastHourly(geo);
	}

	getForecast(): Observable<ForecastHourly[]> {
		return this.weatherForecastFacade.getForecastHourly();
	}

	getForecastLoading(): Observable<boolean> {
		return this.weatherForecastFacade.getForecastHourlyLoading();
	}

	getForecastError(): Observable<boolean> {
		return this.weatherForecastFacade.getForecastHourlyError();
	}

	getForecastSuccess(): Observable<boolean> {
		return this.weatherForecastFacade.getForecastHourlySuccess();
	}
}
