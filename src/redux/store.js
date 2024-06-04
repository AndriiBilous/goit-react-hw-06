import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './contactsSlice';
import filterReducer from './filtersSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contactItem',
    storage,
    whitelist: ['items'],
};

const persistedContactReducer = persistReducer(persistConfig, itemReducer);

export const store = configureStore({
    reducer: { contacts: persistedContactReducer, filters: filterReducer },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
