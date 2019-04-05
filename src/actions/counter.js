

//action generators
export const increment = () => {
    return {
        type:'INC_COUNTER'
    }
}

export const decrement = () => {
    return {
        type:'DEC_COUNTER'
    }
}

export const reset = () => {
    return {
        type:'RESET_COUNTER'  
    }
}