import { Injectable } from '@angular/core';
import { Converter } from '@bp/utils/const';
import { Coordinates, WeatherForecastApiResponse } from '@bp/weather-forecast/const';

@Injectable({ providedIn: 'root' })
export class WeatherForecastLocationNormalizer
	implements Converter<WeatherForecastApiResponse.CoordinatesByLocationName, Coordinates>
{
	convert = (source: WeatherForecastApiResponse.CoordinatesByLocationName): Coordinates => {
		return {
			name: source.name,
			geo: {
				lat: source.lat,
				lon: source.lon,
			},
		};
	};
}
