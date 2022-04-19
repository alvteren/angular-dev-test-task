import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForecastMode } from '@bp/weather-forecast/const';
import { SwitcherService } from '@bp/weather-forecast/feature';
import { Subscription, take } from 'rxjs';

@Component({
	selector: 'bp-switcher',
	templateUrl: './switcher.component.html',
	styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent implements OnInit, OnDestroy {
	forecastMode = ForecastMode;

	form: FormGroup = new FormGroup({
		mode: new FormControl(ForecastMode.Daily),
	});
	subscriptions = new Subscription();

	constructor(protected switcherService: SwitcherService) {}

	ngOnInit(): void {
		this.subscriptions.add(
			this.form.valueChanges.subscribe(({ mode }) => {
				this.switcherService.setForecastMode(mode);
			})
		);

		this.switcherService
			.getSwitcherState()
			.pipe(take(1))
			.subscribe(mode => {
				this.form.get('mode').setValue(mode, { emitEvent: false });
			});
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
