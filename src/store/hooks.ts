import { rootReducer } from './reducerCards';
import { store } from './store';
import {
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook,
} from 'react-redux';



type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;


export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();

//check - maybe we can use hooks from reat-redux without this types