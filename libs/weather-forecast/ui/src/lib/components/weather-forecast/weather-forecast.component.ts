import { Component, OnInit } from '@angular/core';
import { ForecastMode } from '@bp/weather-forecast/const';
import { SwitcherService } from '@bp/weather-forecast/feature';
import { Observable } from 'rxjs';

@Component({
	selector: 'bp-weather-forecast',
	templateUrl: './weather-forecast.component.html',
	styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
	forecastMode = ForecastMode;

	mode$: Observable<ForecastMode>;

	constructor(protected switcherService: SwitcherService) {}

	ngOnInit(): void {
		this.mode$ = this.switcherService.getSwitcherState();
	}
}
