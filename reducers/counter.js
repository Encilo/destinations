import * as types from '../actions/types';

export function counter(state = {}, action) {
    switch (action.type) {
        case types.INCREMENT_COUNTER:
            return state + 1;
        case types.DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
} 