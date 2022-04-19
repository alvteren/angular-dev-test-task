import { Injectable } from '@angular/core';
import { ForecastMode } from '@bp/weather-forecast/const';
import { SwitcherFacade } from '@bp/weather-forecast/data-access';

import { filter, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwitcherService {
	constructor(protected switcherFacade: SwitcherFacade) {}

	getSwitcherState(): Observable<ForecastMode> {
		return this.switcherFacade.getForecastMode().pipe(filter(Boolean));
	}

	setForecastMode(mode: ForecastMode): void {
		this.switcherFacade.setForecastMode(mode);
	}

	// it isn't necessary. the method for demonstration why I use service wrapper by facade
	toggleForecastMode(): void {
		this.getSwitcherState()
			.pipe(take(1))
			.subscribe((state: ForecastMode) => {
				if (state === ForecastMode.Daily) {
					this.setForecastMode(ForecastMode.Hourly);
				} else {
					this.setForecastMode(ForecastMode.Daily);
				}
			});
	}
}
