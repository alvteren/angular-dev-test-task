export namespace WeatherForecastApiResponse {
	export interface Direct {
		name: string;
		local_names: {
			[key: string]: string;
		};
		lat: number;
		lon: number;
		country: string;
	}

	export interface Forecast {
		lat: number;
		lon: number;
		timezone: string;
		timezone_offset: number;
		hourly: ForecastHourly[];
		daily: ForecastDaily[];
	}

	export interface ForecastHourly {
		dt: number;
		temp: number;
		feels_like: number;
		pressure: number;
		humidity: number;
		dew_point: number;
		uvi: number;
		clouds: number;
		visibility: number;
		wind_speed: number;
		wind_deg: number;
		wind_gust: number;
		weather: [
			{
				id: number;
				main: string;
				description: string;
				icon: string;
			}
		];
		pop: number;
	}

	export interface ForecastDaily {
		dt: number;
		sunrise: number;
		sunset: number;
		moonrise: number;
		moonset: number;
		moon_phase: number;
		temp: {
			day: number;
			min: number;
			max: number;
			night: number;
			eve: number;
			morn: number;
		};
		feels_like: {
			day: number;
			night: number;
			eve: number;
			morn: number;
		};
		pressure: number;
		humidity: number;
		dew_point: number;
		wind_speed: number;
		wind_deg: number;
		weather: [
			{
				id: number;
				main: string;
				description: string;
				icon: string;
			}
		];
		clouds: number;
		pop: number;
		rain: number;
		uvi: number;
	}
}

export interface Geo {
	lat: number;
	lon: number;
}
