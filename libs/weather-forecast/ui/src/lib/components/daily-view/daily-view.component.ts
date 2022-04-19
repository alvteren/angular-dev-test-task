import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForecastDaily } from '@bp/weather-forecast/const';
import { WeatherForecastDailyService, WeatherForecastLocationService } from '@bp/weather-forecast/feature';
import { map, Observable, pluck } from 'rxjs';

@Component({
	selector: 'bp-daily-view',
	templateUrl: './daily-view.component.html',
	styleUrls: ['./daily-view.component.scss'],
})
export class DailyViewComponent implements OnInit {
	forecast$: Observable<ForecastDaily[]>;
	cityName$: Observable<string>;
	error$: Observable<boolean>;
	loading$: Observable<boolean>;

	constructor(
		protected router: Router,
		protected weatherForecastService: WeatherForecastDailyService,
		protected weatherForecastLocationService: WeatherForecastLocationService
	) {}

	ngOnInit(): void {
		this.cityName$ = this.weatherForecastLocationService.getCities().pipe(
			map(cities => cities[0]),
			pluck('name')
		);
		this.forecast$ = this.weatherForecastService.getForecastWithLoading();
		this.loading$ = this.weatherForecastService.getForecastLoading();
		this.error$ = this.weatherForecastService.getForecastError();
	}
}
