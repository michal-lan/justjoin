import { FilterActionTypes } from './filter.types';

const INITIAL_STATE = {
    currentFilter: null
}

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterActionTypes.SET_CURRENT_FILTER:
            return {
                ...state,
                currentFilter: action.payload
            };
        default:
            return state;
    }
};

export default filterReducer;