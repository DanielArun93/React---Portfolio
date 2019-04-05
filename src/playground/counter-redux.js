import { createStore, combineReducers } from 'redux';

//action generators
const increment = () => {
    return {
        type: 'INC_COUNTER'
    }
}

const decrement = () => {
    return {
        type: 'DEC_COUNTER'
    }
}

const reset = () => {
    return {
        type: 'RESET_COUNTER'
    }
}

const counter = {
    count: 0
}

const counterReducer = (state = counter, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            const inc = state.count + 1;
            return {
                count: inc
            }
        case 'DEC_COUNTER':
            const dec = state.count - 1;
            return {
                count: dec
            }
        case 'RESET_COUNTER':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    counter: counterReducer
}));



store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment());

store.dispatch(increment());
setTimeout(() => {
store.dispatch(increment());
},3000)


// store.dispatch(decrement());
// store.dispatch(reset());

