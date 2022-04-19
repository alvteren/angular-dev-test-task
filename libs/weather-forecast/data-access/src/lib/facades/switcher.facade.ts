import { Injectable } from '@angular/core';
import { ForecastMode } from '@bp/weather-forecast/const';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherForecastActions } from '../store/actions';
import { WeatherForecastSelectors } from '../store/selectors';
import { StateWithWeatherForecast } from '../store/weather-forecast-state';

@Injectable({ providedIn: 'root' })
export class SwitcherFacade {
	constructor(protected store: Store<StateWithWeatherForecast>) {}

	getForecastMode(): Observable<ForecastMode> {
		return this.store.select(WeatherForecastSelectors.getSwitcherState);
	}

	setForecastMode(mode: ForecastMode): void {
		this.store.dispatch(new WeatherForecastActions.SetForecastMode(mode));
	}
}
