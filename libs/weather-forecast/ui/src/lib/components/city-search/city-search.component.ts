import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Coordinates } from '@bp/weather-forecast/const';
import { WeatherForecastLocationService } from '@bp/weather-forecast/feature';
import { Observable, take } from 'rxjs';

@Component({
	selector: 'bp-city-search',
	templateUrl: './city-search.component.html',
	styleUrls: ['./city-search.component.scss'],
})
export class CitySearchComponent implements OnInit {
	searchResults$: Observable<Coordinates[]>;

	form: FormGroup = new FormGroup({
		query: new FormControl(),
	});

	constructor(protected router: Router, protected weatherForecastLocationService: WeatherForecastLocationService) {}

	ngOnInit(): void {
		this.searchResults$ = this.weatherForecastLocationService.getCoordinates();
		this.weatherForecastLocationService
			.getCities()
			.pipe(take(1))
			.subscribe(cities => {
				this.form.get('query').setValue(cities[0].name, { emitEvent: false });
			});
	}

	search(): void {
		this.weatherForecastLocationService.loadCoordinatesByLocationName(this.form.controls['query'].value.trim());
	}
}
