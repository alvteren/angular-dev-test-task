import { Injectable } from '@angular/core';
import { Coordinates } from '@bp/weather-forecast/const';
import { WeatherForecastFacade } from '@bp/weather-forecast/data-access';

import { filter, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherForecastLocationService {
	constructor(protected weatherForecastFacade: WeatherForecastFacade) {}

	loadCoordinatesByLocationName(query: string): void {
		this.weatherForecastFacade.loadCoordinatesByLocationName(query);
	}

	getCoordinates(): Observable<Coordinates[]> {
		return this.weatherForecastFacade.getCoordinates();
	}

	getCities(): Observable<Coordinates[]> {
		return this.getCoordinates().pipe(filter(cities => Boolean(cities?.length)));
	}

	getCoordinatesLoading(): Observable<boolean> {
		return this.weatherForecastFacade.getCoordinatesLoading();
	}

	getCoordinatesError(): Observable<boolean> {
		return this.weatherForecastFacade.getCoordinatesError();
	}

	getCoordinatesSuccess(): Observable<boolean> {
		return this.weatherForecastFacade.getCoordinatesSuccess();
	}
}
