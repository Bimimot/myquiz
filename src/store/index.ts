
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './reducerCards';
import {
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook,
} from 'react-redux';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;


const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
const useDispatch = () => dispatchHook<AppDispatch>();

export {
    store,
    useSelector,
    useDispatch
}