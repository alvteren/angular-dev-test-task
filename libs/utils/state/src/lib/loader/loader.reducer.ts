import { Action } from '@ngrx/store';
import { LoaderState } from './loader-state';
import { LoaderAction } from './loader.action';

export const initialLoaderState: LoaderState<any> = {
	loading: false,
	error: false,
	success: false,
	value: undefined,
};

export function loaderReducer<T, V extends Action = Action>(
	entityType: string,
	reducer?: (state: T, action: Action | V) => T
): (state: LoaderState<T>, action: LoaderAction) => LoaderState<T> {
	return (state: LoaderState<T> = initialLoaderState, action: LoaderAction): LoaderState<T> => {
		if (action.meta && action.meta.loader && action.meta.entityType === entityType) {
			const entity = action.meta.loader;

			if (entity.load) {
				return {
					...state,
					loading: true,
					value: reducer ? reducer(state.value, action) : state.value,
				};
			} else if (entity.error) {
				return {
					...state,
					loading: false,
					error: true,
					success: false,
					value: reducer ? reducer(state.value, action) : undefined,
				};
			} else if (entity.success) {
				return {
					...state,
					value: reducer ? reducer(state.value, action) : action.payload,
					loading: false,
					error: false,
					success: true,
				};
			} else {
				// reset state action
				return {
					...initialLoaderState,
					value: reducer ? reducer(initialLoaderState.value, action) : initialLoaderState.value,
				};
			}
		}

		if (reducer) {
			const newValue = reducer(state.value, action);
			if (newValue !== state.value) {
				return { ...state, value: newValue };
			}
		}
		return state;
	};
}
