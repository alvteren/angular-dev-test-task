import { NgModule } from '@angular/core';
import { CitySearchModule } from './components/city-search/city-search.module';
import { DailyViewModule } from './components/daily-view/daily-view.module';
import { HourlyViewModule } from './components/hourly-view/hourly-view.module';
import { WeatherForecastModule } from './components/weather-forecast/weather-forecast.module';

@NgModule({
	imports: [CitySearchModule, HourlyViewModule, DailyViewModule, WeatherForecastModule],
	exports: [WeatherForecastModule],
})
export class WeatherForecastUiModule {}
