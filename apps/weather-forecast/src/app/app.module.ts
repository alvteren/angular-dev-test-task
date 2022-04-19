import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { WeatherForecastShellModule } from '@bp/weather-forecast/shell';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],

	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([]),
		StoreModule.forRoot({}),
		EffectsModule.forRoot(),
		WeatherForecastShellModule,
		StoreDevtoolsModule.instrument({ logOnly: environment.production }),
		StoreRouterConnectingModule.forRoot(),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
