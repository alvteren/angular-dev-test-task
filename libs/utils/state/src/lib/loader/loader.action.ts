import { Action } from '@ngrx/store';

export const Loader_LOAD_ACTION = '[Loader] Load';
export const Loader_FAIL_ACTION = '[Loader] Fail';
export const Loader_SUCCESS_ACTION = '[Loader] Success';
export const Loader_RESET_ACTION = '[Loader] Reset';

export interface LoaderMeta {
	entityType: string;
	loader: {
		load?: boolean;
		error?: any;
		success?: boolean;
	};
}

export interface LoaderAction extends Action {
	readonly payload?: any;
	readonly meta?: LoaderMeta;
}

export function loadMeta(entityType: string): LoaderMeta {
	return {
		entityType: entityType,
		loader: {
			load: true,
		},
	};
}

export function failMeta(entityType: string, error?: any): LoaderMeta {
	return {
		entityType: entityType,
		loader: {
			error: error ? error : true,
		},
	};
}

export function successMeta(entityType: string): LoaderMeta {
	return {
		entityType: entityType,
		loader: {
			success: true,
		},
	};
}

export function resetMeta(entityType: string): LoaderMeta {
	return {
		entityType: entityType,
		loader: {},
	};
}
export class LoaderLoadAction implements LoaderAction {
	type = Loader_LOAD_ACTION;
	readonly meta: LoaderMeta;
	constructor(entityType: string) {
		this.meta = loadMeta(entityType);
	}
}

export class LoaderFailAction implements LoaderAction {
	type = Loader_FAIL_ACTION;
	readonly meta: LoaderMeta;
	constructor(entityType: string, error?: any) {
		this.meta = failMeta(entityType, error);
	}
}

export class LoaderSuccessAction implements LoaderAction {
	type = Loader_SUCCESS_ACTION;
	readonly meta: LoaderMeta;
	constructor(entityType: string) {
		this.meta = successMeta(entityType);
	}
}

export class LoaderResetAction implements LoaderAction {
	type = Loader_RESET_ACTION;
	readonly meta: LoaderMeta;
	constructor(entityType: string) {
		this.meta = resetMeta(entityType);
	}
}
