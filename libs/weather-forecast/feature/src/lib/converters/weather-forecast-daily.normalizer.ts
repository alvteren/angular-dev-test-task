import { Injectable } from '@angular/core';
import { Converter } from '@bp/utils/const';
import { ForecastDaily, WeatherForecastApiResponse } from '@bp/weather-forecast/const';

@Injectable({ providedIn: 'root' })
export class WeatherForecastDailyNormalizer implements Converter<WeatherForecastApiResponse.Forecast, ForecastDaily[]> {
	convert = (source: WeatherForecastApiResponse.Forecast): ForecastDaily[] => {
		return source.daily.map(forecastItem => ({
			dateTime: forecastItem.dt,
			temperature: forecastItem.temp.day,
			timezone: source.timezone,
		}));
	};
}
