import { FilterActionTypes } from './filter.types';

export const setCurrentFilter = filter => ({
    type: FilterActionTypes.SET_CURRENT_FILTER,
    payload: filter
});