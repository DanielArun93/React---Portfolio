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

export default counterReducer;