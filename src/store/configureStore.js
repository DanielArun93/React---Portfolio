import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';

export default () => {
    const store = createStore(combineReducers({
       counter:counterReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}