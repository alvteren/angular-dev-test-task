import { NgModule } from '@angular/core';
import { WeatherForecastDataAccessModule } from '@bp/weather-forecast/data-access';
import { WeatherForecastFeatureModule } from '@bp/weather-forecast/feature';
import { WeatherForecastUiModule } from '@bp/weather-forecast/ui';

@NgModule({
	imports: [WeatherForecastDataAccessModule, WeatherForecastFeatureModule, WeatherForecastUiModule],
	exports: [WeatherForecastUiModule],
})
export class WeatherForecastShellModule {}
