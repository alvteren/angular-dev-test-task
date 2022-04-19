import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CitySearchModule } from '../city-search/city-search.module';
import { DailyViewModule } from '../daily-view/daily-view.module';
import { HourlyViewModule } from '../hourly-view/hourly-view.module';
import { SwitcherModule } from '../switcher/switcher.module';
import { WeatherForecastComponent } from './weather-forecast.component';

@NgModule({
	declarations: [WeatherForecastComponent],
	imports: [CommonModule, CitySearchModule, DailyViewModule, HourlyViewModule, SwitcherModule],
	exports: [WeatherForecastComponent],
})
export class WeatherForecastModule {}
