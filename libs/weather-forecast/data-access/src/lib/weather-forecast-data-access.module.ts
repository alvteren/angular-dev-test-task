import { NgModule } from '@angular/core';
import { WeatherForecastStoreModule } from './store/weather-forecast-store.module';

@NgModule({
	imports: [WeatherForecastStoreModule],
})
export class WeatherForecastDataAccessModule {}
