import { Injectable } from '@angular/core';
import { Converter } from '@bp/utils/const';
import { ForecastHourly, WeatherForecastApiResponse } from '@bp/weather-forecast/const';

@Injectable({ providedIn: 'root' })
export class WeatherForecastHourlyNormalizer
	implements Converter<WeatherForecastApiResponse.Forecast, ForecastHourly[]>
{
	convert = (source: WeatherForecastApiResponse.Forecast): ForecastHourly[] => {
		return source.hourly.map(forecastItem => ({
			dateTime: forecastItem.dt,
			temperature: forecastItem.temp,
			timezone: source.timezone,
		}));
	};
}
