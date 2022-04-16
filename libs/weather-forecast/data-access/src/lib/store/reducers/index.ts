import { InjectionToken, Provider } from '@angular/core';
import { CityActions } from '@city/data-access';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { StateUtils, StateWithProduct } from '@spartacus/core';
import {
	CALCULATORS,
	CALCULATOR_RESULT,
	UNIT_PRICE,
	UNIT_PRICE_SELECTED,
	WeatherForecastState,
} from '../weather-forecast-state';
import { reducer as unitPriceSelectedReducer } from './unit-price-selected.reducer';

export type ProductReducers = Omit<WeatherForecastState, 'ticket'>;

export function getReducers(): ActionReducerMap<ProductReducers> {
	return {
		unitPrices: StateUtils.entityLoaderReducer(UNIT_PRICE),
		unitPriceSelected: StateUtils.entityReducer(UNIT_PRICE_SELECTED, unitPriceSelectedReducer),
		calculatorList: StateUtils.entityLoaderReducer(CALCULATORS),
		calculatorResult: StateUtils.loaderReducer(CALCULATOR_RESULT),
	};
}

export const reducerToken: InjectionToken<ActionReducerMap<ProductReducers>> = new InjectionToken<
	ActionReducerMap<ProductReducers>
>('ProductReducers');

export const reducerProvider: Provider = {
	provide: reducerToken,
	useFactory: getReducers,
};

export function resetProductFactory(): MetaReducer<StateWithProduct> {
	const metaReducer =
		(reducer: ActionReducer<StateWithProduct>): ActionReducer<StateWithProduct> =>
		(state: StateWithProduct, action: CityActions.SetActiveBaseStore): StateWithProduct => {
			if (action.type === CityActions.SET_ACTIVE_BASE_STORE) {
				const newState = {
					...state,
					product: {
						...state.product,
						details: { entities: {} },
					},
				};

				return reducer(newState, action);
			}

			return reducer(state, action);
		};

	return metaReducer;
}
