import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter/filter.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['filter']
}

const rootReducer = combineReducers({
    filter: filterReducer
});

export default persistReducer(persistConfig, rootReducer);