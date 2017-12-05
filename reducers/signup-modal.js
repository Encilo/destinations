import * as types from '../actions/types';

export function signupModal(state = {}, action) {
    switch (action.type) {
        case types.OPEN_SIGNUP_MODAL:
            return {
                ...state,
                isVisible: true
            };
        case types.CLOSE_SIGNUP_MODAL:
            return {
                ...state,
                isVisible: false
            };
        default:
            return state;
    }
} 