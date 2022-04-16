import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducerProvider, reducerToken } from './reducers';
import { PRODUCT_FEATURE as WEATHER_FORECAST_FEATURE } from './weather-forecast-state';

@NgModule({
	imports: [StoreModule.forFeature(WEATHER_FORECAST_FEATURE, reducerToken)],
	providers: [reducerProvider],
})
export class ProductStoreModule {}
