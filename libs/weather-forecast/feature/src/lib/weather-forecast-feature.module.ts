import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects';

@NgModule({
	imports: [EffectsModule.forFeature(effects)],
})
export class WeatherForecastFeatureModule {}
