import { createSelector, MemoizedSelector } from '@ngrx/store';
import { CalculatorItem } from '@product/const';
import { StateUtils } from '@spartacus/core';
import { StateWithWeatherForecast, WeatherForecastState } from '../weather-forecast-state';

import { getWeatherForecastState } from './feature.selector';

type CalculatorsState = WeatherForecastState['calculatorList'];
type CalculatorResultState = WeatherForecastState['calculatorResult'];

export const getCalculatorsState: MemoizedSelector<StateWithWeatherForecast, CalculatorsState> = createSelector(
	getWeatherForecastState,
	(state: WeatherForecastState) => state.calculatorList
);

export const getCalculatorResult: MemoizedSelector<StateWithWeatherForecast, CalculatorResultState> = createSelector(
	getWeatherForecastState,
	(state: WeatherForecastState) => state.calculatorResult
);

export const getCalculators = (
	productCode: string
): MemoizedSelector<StateWithWeatherForecast, StateUtils.LoaderState<CalculatorItem[]>> =>
	createSelector(getCalculatorsState, (state: CalculatorsState) =>
		StateUtils.entityLoaderStateSelector<CalculatorItem[]>(state, productCode)
	);
