import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherForecastHourlyService, WeatherForecastLocationService } from '@bp/weather-forecast/feature';
import { DailyViewComponent } from '../daily-view/daily-view.component';

@Component({
	selector: 'bp-hourly-view',
	templateUrl: './hourly-view.component.html',
	styleUrls: ['./hourly-view.component.scss'],
})
export class HourlyViewComponent extends DailyViewComponent {
	constructor(
		protected router: Router,
		protected weatherForecastService: WeatherForecastHourlyService,
		protected weatherForecastLocationService: WeatherForecastLocationService
	) {
		super(router, weatherForecastService, weatherForecastLocationService);
	}
}
