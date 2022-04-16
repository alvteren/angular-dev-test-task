import { UnitPriceSelected } from '@product/const';
import { ProductActions } from '../actions';

export const initialState: UnitPriceSelected = undefined;

export function reducer(
  state = initialState,
  action: ProductActions.SetUnitPriceSelected | ProductActions.SetUnitPricesArraySelected,
): UnitPriceSelected {
  switch (action.type) {
    case ProductActions.SET_UNIT_PRICE:
    case ProductActions.SET_UNIT_PRICES_ARRAY: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
