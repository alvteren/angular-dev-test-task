import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ProductUnitPrice, UnitPriceSelected } from '@product/const';
import { StateUtils } from '@spartacus/core';
import { StateWithWeatherForecast, WeatherForecastState } from '../weather-forecast-state';

import { getWeatherForecastState } from './feature.selector';

type UnitPricesState = WeatherForecastState['unitPrices'];

export const getUnitPricesState: MemoizedSelector<StateWithWeatherForecast, UnitPricesState> = createSelector(
	getWeatherForecastState,
	(state: WeatherForecastState) => state.unitPrices
);

export const getUnitPrices = (
	productCode: string
): MemoizedSelector<StateWithWeatherForecast, StateUtils.LoaderState<ProductUnitPrice[]>> =>
	createSelector(getUnitPricesState, (state: UnitPricesState) =>
		StateUtils.entityLoaderStateSelector<ProductUnitPrice[]>(state, productCode)
	);

export const getUnitPricesValue = (
	productCode: string
): MemoizedSelector<StateWithWeatherForecast, ProductUnitPrice[]> =>
	createSelector(getUnitPricesState, (state: UnitPricesState) =>
		StateUtils.entityValueSelector<ProductUnitPrice[]>(state, productCode)
	);

export const getUnitPricesLoading = (productCode: string): MemoizedSelector<StateWithWeatherForecast, boolean> =>
	createSelector(getUnitPricesState, (state: UnitPricesState) =>
		StateUtils.entityLoadingSelector<ProductUnitPrice[]>(state, productCode)
	);

export const getUnitPricesError = (productCode: string): MemoizedSelector<StateWithWeatherForecast, boolean> =>
	createSelector(getUnitPricesState, (state: UnitPricesState) =>
		StateUtils.entityErrorSelector<ProductUnitPrice[]>(state, productCode)
	);

export const getUnitPricesSuccess = (productCode: string): MemoizedSelector<StateWithWeatherForecast, boolean> =>
	createSelector(getUnitPricesState, (state: UnitPricesState) =>
		StateUtils.entitySuccessSelector<ProductUnitPrice[]>(state, productCode)
	);

type UnitPriceSelectedState = WeatherForecastState['unitPriceSelected'];

export const getUnitPriceSelectedState: MemoizedSelector<StateWithWeatherForecast, UnitPriceSelectedState> =
	createSelector(getWeatherForecastState, (state: WeatherForecastState) => state.unitPriceSelected);

export const getUnitPriceSelectedFactory = (
	productCode: string
): MemoizedSelector<StateWithWeatherForecast, UnitPriceSelected> =>
	createSelector(getUnitPriceSelectedState, (state: UnitPriceSelectedState) => {
		return StateUtils.entitySelector<UnitPriceSelected>(state, productCode);
	});
