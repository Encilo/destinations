import * as types from '../actions/types';

export function forgotPasswordModal(state = {}, action) {
    switch (action.type) {
        case types.OPEN_MODAL:
            return {
                ...state,
                isVisible: true
            };
        case types.CLOSE_MODAL:
            return {
                ...state,
                isVisible: false
            };
        default:
            return state;
    }
} 