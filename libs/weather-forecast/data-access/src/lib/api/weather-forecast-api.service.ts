import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	Coordinates,
	ForecastDaily,
	ForecastHourly,
	ForecastMode,
	forecastModeExlude,
	Geo,
	WeatherForecastApiResponse,
} from '@bp/weather-forecast/const';
import {
	WeatherForecastDailyNormalizer,
	WeatherForecastHourlyNormalizer,
	WeatherForecastLocationNormalizer,
} from '@bp/weather-forecast/feature';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherForecastApiService {
	// @todo get from environment config or variables
	private baseUrl = 'http://api.openweathermap.org';
	private apiKey = '010721642521f31b0fbc8c3831d45951';

	constructor(
		protected http: HttpClient,
		protected weatherForecastLocationNormalizer: WeatherForecastLocationNormalizer,
		protected weatherForecastDailyNormalizer: WeatherForecastDailyNormalizer,
		protected weatherForecastHourlyNormalizer: WeatherForecastHourlyNormalizer
	) {}

	loadCoordinatesByLocationName(query: string): Observable<Coordinates[]> {
		const params = new HttpParams({ fromObject: { appid: this.apiKey, q: query, limit: 1 } });

		return this.http
			.get<WeatherForecastApiResponse.CoordinatesByLocationName[]>(`${this.baseUrl}/geo/1.0/direct`, {
				params,
			})
			.pipe(map(cities => cities.map(this.weatherForecastLocationNormalizer.convert)));
	}

	loadForecast({ lat, lon }: Geo, mode: ForecastMode): Observable<WeatherForecastApiResponse.Forecast> {
		const exclude: string = forecastModeExlude[mode];
		const params = new HttpParams({ fromObject: { lat, lon, exclude, appid: this.apiKey } });

		return this.http.get<WeatherForecastApiResponse.Forecast>(`${this.baseUrl}/data/2.5/onecall`, { params });
	}

	loadForecastDaily(geo: Geo): Observable<ForecastDaily[]> {
		return this.loadForecast(geo, ForecastMode.Daily).pipe(map(this.weatherForecastDailyNormalizer.convert));
	}

	loadForecastHourly(geo: Geo): Observable<ForecastHourly[]> {
		return this.loadForecast(geo, ForecastMode.Hourly).pipe(map(this.weatherForecastHourlyNormalizer.convert));
	}
}
