import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForecastMode, forecastModeExlude, Geo, WeatherForecastApiResponse } from '@bp/weather-forecast/const';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherForecastApiService {
	// @todo get from environment config or variables
	private baseUrl = 'http://api.openweathermap.org';
	private apiKey = '010721642521f31b0fbc8c3831d45951';

	constructor(protected http: HttpClient) {}

	getDirect(query: string): Observable<WeatherForecastApiResponse.Direct[]> {
		const params = new HttpParams({ fromObject: { appid: this.apiKey, q: query, limit: 1 } });

		return this.http.get<WeatherForecastApiResponse.Direct[]>(`${this.baseUrl}/geo/1.0/direct`, { params });
	}

	getForecast({ lat, lon }: Geo, mode: ForecastMode): Observable<WeatherForecastApiResponse.Forecast> {
		const exclude = forecastModeExlude[mode];
		const params = new HttpParams({ fromObject: { lat, lon, appid: this.apiKey, exclude } });

		return this.http.get<WeatherForecastApiResponse.Forecast>(`${this.baseUrl}/data/2.5/onecall`, { params });
	}
}
